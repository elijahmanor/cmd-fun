import React from 'react'
import MDX from '@mdx-js/runtime'
import { MDXProvider } from '@mdx-js/react'
import CopyButton from './CopyButton'
import RunButton from './RunButton'
import Code from './Code'
import HeartRate from './HeartRate'
import Link from './Link'
import Highlight from './Highlight'
import Appear from './Appear'
import TabCompletion from './TabCompletion'
import blessed from 'neo-blessed'
import figlet from 'figlet'
import { centerFiglet } from './utils'
import chalk from 'chalk'

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
const components = {
    h1: ({ children, ...props }) => (
        <text top={1} bold {...props}>
            {chalk.yellowBright(
                centerFiglet(
                    figlet.textSync(children, {
                        font: H1_FONTS[0],
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                    }),
                    global.screen.width - 8
                )
            )}
        </text>
    ),
    h2: ({ children, ...props }) => (
        <text top={1} bold {...props}>
            {chalk.bold(
                figlet.textSync(children, {
                    font: H2_FONTS[0],
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                })
            )}
        </text>
    ),
    p: ({ children }) => <text>{children}</text>,
    CopyButton: ({ ...props }) => <CopyButton {...props} />,
    RunButton: ({ ...props }) => <RunButton {...props} />,
    Highlight: ({ ...props }) => <Highlight {...props} />,
    code: ({ ...props }) => <text bold {...props} />,
    pre: ({ ...props }) => <text bold {...props} />,
    Link: ({ ...props }) => <Link {...props} />,
    Appear: ({ ...props }) => <Appear {...props} />,
    TabCompletion: ({ ...props }) => <TabCompletion {...props} />,
    Code: ({ ...props }) => <Code {...props} />,
    HeartRate: ({ ...props }) => <HeartRate {...props} />,
}

blessed.classes.forEach(key => {
    const Component = key.toLowerCase()
    components[key] = ({ children, ...props }) => (
        <Component {...props}>{children}</Component>
    )
})

export default function Mdx({ content }) {
    return (
        <MDXProvider components={components}>
            <MDX>{content}</MDX>
        </MDXProvider>
    )
}
