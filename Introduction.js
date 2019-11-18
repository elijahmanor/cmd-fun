import React, { useState, useEffect, useRef } from 'react'
import blessed from 'neo-blessed'
import figlet from 'figlet'

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
// const FONTS = figlet.fontsSync()

let timerId
const fs = require('fs')

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

export default function Introduction({ screen, onFontChange }) {
    const [fontIndex, setFontIndex] = useState(0)
    const [showFont, setShowFont] = useState(false)

    useEffect(() => {
        function handleKey(ch, key) {
            const font = (fontIndex + 1) % (FONTS.length - 1)
            setFontIndex(font)
            setShowFont(true)
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                setShowFont(false)
            }, 5000)
            onFontChange(font)
        }
        screen.key(['C-f'], handleKey)
        return () => screen.unkey(['C-f'], handleKey)
    }, [fontIndex])
    const font = FONTS[fontIndex]
    return (
        <>
            <box
                top={`5%`}
                left="center"
                width="100%-2"
                align="center"
                height={7}
            >
                {centerFiglet(
                    figlet.textSync('Have Fun & Be', {
                        font,
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                    }),
                    screen.width
                )}
            </box>
            <box
                top={`35%`}
                left="center"
                align="center"
                width="100%-2"
                height={7}
            >
                {centerFiglet(
                    figlet.textSync('Productive in', {
                        font,
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                    }),
                    screen.width
                )}
            </box>
            <box top={`65%`} left="center" width="100%-2" height={7}>
                {centerFiglet(
                    figlet.textSync('the Terminal', {
                        font,
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                    }),
                    screen.width
                )}
            </box>
            {showFont && (
                <box top="85%" left="center" width="80%" height="5%">
                    {font}
                </box>
            )}
        </>
    )
}