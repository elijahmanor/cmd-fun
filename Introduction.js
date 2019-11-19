import React, { useState, useEffect } from 'react'
import figlet from 'figlet'
import { centerFiglet } from './utils'
import chalk from 'chalk'
import Printer from '@darkobits/lolcatjs'

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

const colorMap = [
    chalk.blue,
    chalk.red,
    chalk.green,
    chalk.yellow,
    chalk.magenta,
    chalk.cyan,
    chalk.white,
    chalk.gray,
    Printer.fromString,
]

export default function Introduction({ screen, onFontChange }) {
    const [fontIndex, setFontIndex] = useState(0)
    const [showFont, setShowFont] = useState(false)
    const [colorIndex, setColorIndex] = useState(0)

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

    useEffect(() => {
        function handleKey(ch, key) {
            setColorIndex(colorIndex + 1)
        }
        screen.key(['C-v'], handleKey)
        return () => screen.unkey(['C-v'], handleKey)
    }, [colorIndex])

    const font = FONTS[fontIndex]
    return (
        <>
            <box
                top={`0%`}
                left="center"
                width="100%-2"
                align="center"
                height={7}
            >
                {colorMap[colorIndex % colorMap.length](
                    centerFiglet(
                        figlet.textSync('Have Fun & Be', {
                            font,
                            horizontalLayout: 'default',
                            verticalLayout: 'default',
                        }),
                        screen.width
                    )
                )}
            </box>
            <box
                top={`30%`}
                left="center"
                align="center"
                width="100%-2"
                height={7}
            >
                {colorMap[colorIndex % colorMap.length](
                    centerFiglet(
                        figlet.textSync('Productive in', {
                            font,
                            horizontalLayout: 'default',
                            verticalLayout: 'default',
                        }),
                        screen.width
                    )
                )}
            </box>
            <box top={`60%`} left="center" width="100%-2" height={7}>
                {colorMap[colorIndex % colorMap.length](
                    centerFiglet(
                        figlet.textSync('the Terminal', {
                            font,
                            horizontalLayout: 'default',
                            verticalLayout: 'default',
                        }),
                        screen.width
                    )
                )}
            </box>
            {false && showFont && (
                <box top="85%" left="center" width="80%" height="5%">
                    {font}
                </box>
            )}
        </>
    )
}
