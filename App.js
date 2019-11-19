import React, { Component, useState, useEffect } from 'react'
// import blessed from 'blessed'
// import { render } from 'react-blessed';
import blessed from 'neo-blessed'
import { createBlessedRenderer } from 'react-blessed'
import termImg from 'term-img'
import Introduction from './Introduction.js'
import Image from './Image.js'
import Mdx from './Mdx.js'
import InteractiveTerminal from './InteractiveTerminal.js'
// import Interactive from './Interactive.js'
import Conclusion from './Conclusion.js'
import Overview from './Overview.js'
import { program } from '@babel/types'
import { startCase } from 'lodash'
const render = createBlessedRenderer(blessed)
import figlet from 'figlet'
import Help from './Help.js'
import About from './About.js'
import { centerFiglet, heartRate } from './utils'
const chalk = (global.chalk = require('chalk'))
const fs = require('fs')

const getConfig = () => {
    let config
    try {
        config = fs.readFileSync('.cmd-fun.json') || '{}'
        config = JSON.parse(config)
    } catch (err) {
        config = {}
    }
    return config
}

const setConfig = values => {
    const config = { ...getConfig(), ...values }
    fs.writeFileSync('.cmd-fun.json', JSON.stringify(config, null, 2))
}

const config = getConfig()

const ansimd = require('ansimd')
const markdown = fs.readFileSync('./Readme.md')
const H1_FONTS = [
    'Big',
    '4Max',
    'Bloody',
    'Colossal',
    'Cyberlarge',
    'Doom',
    'Double',
    'Fender',
    'Larry 3D',
    'Modular',
    'Nancyj-Fancy',
    'Nancyj-Improved',
    'Nancyj-Underlined',
    'Nancyj',
    'Slant',
]
const H2_FONTS = ['Calvin S', 'Cybermedium', 'Stick Letters', 'Small']
const pad = (n, width, z) => {
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const dialogMap = {
    overview: {
        component: Overview,
        title: 'Table of Contents',
    },
    help: {
        component: Help,
        title: 'Help',
    },
    about: {
        component: About,
        title: 'About',
    },
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { index: config.currentSlide || 0, dialog: null }
        this.updateIndex = this.updateIndex.bind(this)
        this.toggleShowOverview = this.toggleShowOverview.bind(this)
        this.toggleShowHelp = this.toggleShowHelp.bind(this)
        this.toggleShowAbout = this.toggleShowAbout.bind(this)
        this.handleIndexChange = this.handleIndexChange.bind(this)

        CONTENT.splice(1, 0, {
            title: 'About',
            content: <About screen={screen} />,
            type: 'jsx',
        })
        CONTENT.splice(2, 0, {
            title: 'Modules',
            content: (
                <Overview
                    screen={screen}
                    slides={CONTENT}
                    onChange={this.handleIndexChange}
                    showAll={false}
                />
            ),
            type: 'jsx',
            showTwitter: true,
        })
    }

    componentDidMount() {
        screen.key(['right', 'left'], this.updateIndex)
        screen.key(['C-o'], this.toggleShowOverview)
        screen.key(['C-a'], this.toggleShowAbout)
        screen.key(['?'], this.toggleShowHelp)
    }

    updateIndex(ch, key) {
        const { index } = this.state
        let newIndex = 0
        if (key.name === 'right') {
            newIndex = index < CONTENT.length - 1 ? index + 1 : index
        } else if (key.name === 'left') {
            newIndex = index === 0 ? 0 : index - 1
        }
        this.setState({ index: newIndex }, () => {
            setConfig({ currentSlide: this.state.index })
        })
    }

    toggleShowOverview() {
        this.setState({ dialog: this.state.dialog ? null : 'overview' })
    }

    toggleShowHelp() {
        this.setState({ dialog: this.state.dialog ? null : 'help' })
    }

    toggleShowAbout() {
        this.setState({ dialog: this.state.dialog ? null : 'about' })
    }

    handleIndexChange(index) {
        this.setState({ dialog: null, index }, () => {
            setConfig({ currentSlide: this.state.index })
        })
    }

    render() {
        const { index, dialog } = this.state
        let DialogComponent = dialog ? dialogMap[dialog].component : null
        const currentSlide = CONTENT[index]
        return (
            <>
                <box
                    label={chalk.yellowBright(
                        dialog ? dialogMap[dialog].title : currentSlide.title
                    )}
                    border={{ type: 'line' }}
                    style={{ border: { fg: 'blue' } }}
                    width="100%"
                    height="100%"
                    padding={{ left: 2, right: 2, top: 2, bottom: 2 }}
                    draggable={false}
                >
                    {dialog ? (
                        <DialogComponent
                            screen={screen}
                            slides={CONTENT}
                            onChange={this.handleIndexChange}
                        />
                    ) : (
                        currentSlide.content
                    )}
                </box>
                {!dialog && (
                    <>
                        <text top="100%-2" left={2}>
                            {`${chalk.blueBright.bold(currentSlide.type)}`}
                        </text>
                        {currentSlide.showTwitter ? (
                            <text top="100%-2" left={`50%-6`}>
                                {`${chalk.greenBright.bold('@elijahmanor')}`}
                            </text>
                        ) : null}
                        <text
                            top="100%-2"
                            left="100%-10"
                            valign="bottom"
                        >{`${chalk.blueBright.bold(
                            pad(index + 1, 2)
                        )} ${chalk.grey('of')} ${chalk.blueBright.bold(
                            pad(CONTENT.length, 2)
                        )}`}</text>
                    </>
                )}
            </>
        )
    }
}

const screen = (global.screen = blessed.screen({
    autoPadding: true,
    smartCSR: true,
    title: 'Terminal Slideshow',
}))

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0)
})

const handleFontChange = font => {
    const slide = CONTENT.find(slide => slide.title.includes('Introduction'))
    slide.title = `Introduction - ${font}`
}

const CONTENT = [
    {
        title: 'Introduction',
        slug: 'Intro',
        content: (
            <Introduction screen={screen} onFontChange={handleFontChange} />
        ),
        type: 'jsx',
        showTwitter: true,
    },
    // { title: 'Image', content: <Image />, type: "img" },
    // { title: 'String Content', content: `I support string content`, type: "txt" },
    // { title: 'Markdown Content', content: ansimd(markdown), type: "md" },
    // { title: 'Interactive React Component', content: <Interactive />, type: "jsx" },
    // { title: 'Interactive Terminal Slide', content: <InteractiveTerminal />, type: "jsx" },
]

// var escapes = require('markdown-escapes')
// const escapeStringRegexp = require('escape-string-regexp')
// var escape = require('markdown-escape')
const escape = text => text.replace(/([\\`*_{}\[\]()#+\-.!])/g, '\\$1')
const h1 = text =>
    // escape(
    figlet.textSync(text, {
        font: H1_FONTS[0],
        horizontalLayout: 'default',
        verticalLayout: 'default',
    })
// )
const h2 = text =>
    figlet.textSync(text, {
        font: H2_FONTS[0],
        horizontalLayout: 'default',
        verticalLayout: 'default',
    })

const mdxFiles = fs.readdirSync('./mdx')
mdxFiles
    .filter(f => f.endsWith('.mdx'))
    .forEach(mdx => {
        const contents = fs.readFileSync(`./mdx/${mdx}`).toString()
        const files = contents.split('---')

        files.forEach(file => {
            const [, slideNumber, title, subTitle] =
                mdx.match(/^(\d+)-(\w+)-?(\w+)?\.mdx$/) || []
            const isMarkdown = !file.split('\n').some(l => l.startsWith('<'))
            if (isMarkdown) {
                file = file.trim()
                file = file.replace(/^(# (.+))$/gm, (match, p1, p2) => {
                    let heading = h1(p2)
                    const lines = heading.split('\n')
                    heading = centerFiglet(heading, screen.width - 6)
                    const linesToPrepend = Math.floor(
                        (screen.height - lines.length) / 2 - 3
                    )
                    heading = `${'\r\f'.repeat(linesToPrepend)}${escape(
                        heading
                    )}`
                    return heading
                })
                file = file.replace(/^(## (.+))$/gm, (match, p1, p2) => h2(p2))
                CONTENT.push({
                    title: `${startCase(title)} ${
                        subTitle ? ` (${startCase(subTitle)})` : ''
                    }`,
                    content: ansimd(file),
                    type: 'md',
                    showTwitter: true,
                })
            } else {
                const hasSteps = file
                    .split('\n')
                    .some(l => l.includes('Appear'))
                CONTENT.push({
                    title: `${startCase(title)} ${
                        subTitle ? ` (${startCase(subTitle)})` : ''
                    }`,
                    content: <Mdx content={file} />,
                    type: `mdx${hasSteps ? ' ↓' : ''}`,
                    showTwitter: true,
                })
            }
        })
    })

CONTENT.push({
    title: 'Conclusion',
    slug: 'Outro',
    content: <Conclusion screen={screen} />,
    type: 'jsx',
})

const component = render(<App />, screen)
