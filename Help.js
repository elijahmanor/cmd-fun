import React, { useState, useEffect } from 'react'
import figlet from 'figlet'
import { numericLiteral } from '@babel/types'
import chalk from 'chalk'

// const FONTS = figlet.fontsSync()
const FONTS = [
    'ANSI Shadow',
    '3-D',
    '4Max',
    'Banner',
    'Bell',
    'Big',
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
const H2_FONTS = [
    'Contessa',
    'Italic',
    'Mini',
    'Shimrod',
    'Short',
    'Calvin S',
    'Cybermedium',
    'Stick Letters',
    'Small',
]
let timerId

const centerFiglet = (text, width) => {
    const lines = text.split('\n')
    const longestLine = lines.reduce((memo, line) => {
        memo = line.length > memo ? line.length : memo
        return memo
    }, 0)
    const surroundingPadding = width - longestLine
    return lines
        .map(line => `${' '.repeat(surroundingPadding / 2)}${line}`)
        .join('\n')
}

export default function Help({ screen, slides, onChange }) {
    return (
        <>
            <box
                border={{ type: 'line' }}
                height={'85%'}
                width={'100%-15'}
                top={`0%`}
                left={'0%+4'}
            >
                <text top={'10%'} left={'5%'} width={'40%'}>
                    {chalk.bold.underline('Key Combonation')}
                </text>
                <text top={'10%'} left={'55%'} width={'40%'}>
                    {chalk.bold.underline('Function')}
                </text>

                <text top={'20%'} left={'5%'} width={'40%'}>
                    Left Arrow:
                </text>
                <text top={'20%'} left={'55%'} width={'40%'}>
                    Previous slide
                </text>

                <text top={'30%'} left={'5%'} width={'40%'}>
                    Right Arrow:
                </text>
                <text top={'30%'} left={'55%'} width={'40%'}>
                    Next slide
                </text>

                <text top={'40%'} left={'5%'} width={'40%'}>
                    Down Arrow:
                </text>
                <text top={'40%'} left={'55%'} width={'40%'}>
                    Next bullet point
                </text>

                <text top={'50%'} left={'5%'} width={'40%'}>
                    Control + O:
                </text>
                <text top={'50%'} left={'55%'} width={'40%'}>
                    Overview - Table of Contents
                </text>

                <text top={'60%'} left={'5%'} width={'40%'}>
                    Control + A:
                </text>
                <text top={'60%'} left={'55%'} width={'40%'}>
                    About
                </text>

                <text top={'70%'} left={'5%'} width={'40%'}>
                    Control + C / Escape / Q:
                </text>
                <text top={'70%'} left={'55%'} width={'40%'}>
                    Quit
                </text>
            </box>
        </>
    )
}
