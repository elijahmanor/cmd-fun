import React, { useState, useEffect } from 'react'
import figlet from 'figlet'

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
const H2_FONTS = ['Calvin S', 'Cybermedium', 'Stick Letters', 'Small']
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

export default function Conclusion({ screen }) {
    const [fontIndex, setFontIndex] = useState(0)
    const [showFont, setShowFont] = useState(false)
    useEffect(() => {
        function handleKey() {
            setShowFont(true)
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                setShowFont(false)
            }, 5000)
            setFontIndex((fontIndex + 1) % (FONTS.length - 1))
        }
        screen.key(['C-f'], handleKey)
        return () => screen.unkey(['C-f'], handleKey)
    }, [fontIndex])
    const font = FONTS[fontIndex]
    // border={{ type: 'line' }}
    return (
        <>
            <box
                top="30%"
                left="center"
                align="center"
                width="100%-2"
                height={7}
            >
                {centerFiglet(
                    figlet.textSync('Thank You!', {
                        font,
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                    }),
                    screen.width
                )}
            </box>
            <box
                top="50%"
                left="center"
                align="center"
                width="100%-2"
                height={7}
            >
                {centerFiglet(
                    figlet.textSync('@elijahmanor', {
                        font: H2_FONTS[0],
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
