import React, { useState, useEffect } from 'react'
import figlet from 'figlet'
import { numericLiteral } from '@babel/types'
import chalk from 'chalk'
import { centerFiglet } from './utils'

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

const NUMBER_OF_ITEMS = 10

export default function Help({ screen, slides, onChange }) {
    const offset = (screen.height * 0.7) / 10
    return (
        <>
            <box
                border={{ type: 'line' }}
                height={'85%'}
                width={'100%-15'}
                top={0}
                left={'0%+4'}
            >
                <text top={Math.floor(offset * 1)} left={'5%'} width={'40%'}>
                    {chalk.bold.underline('Key Combonation')}
                </text>
                <text top={Math.floor(offset * 1)} left="40%" width={'40%'}>
                    {chalk.bold.underline('Function')}
                </text>

                <text top={Math.floor(offset * 2)} left={'5%'} width={'40%'}>
                    Left Arrow:
                </text>
                <text top={Math.floor(offset * 2)} left="40%" width={'40%'}>
                    Previous slide
                </text>

                <text top={Math.floor(offset * 3)} left={'5%'} width={'40%'}>
                    Right Arrow:
                </text>
                <text top={Math.floor(offset * 3)} left="40%" width={'40%'}>
                    Next slide
                </text>

                <text top={Math.floor(offset * 4)} left={'5%'} width={'40%'}>
                    Down Arrow:
                </text>
                <text top={Math.floor(offset * 4)} left="40%" width={'40%'}>
                    Next bullet point
                </text>

                <text top={Math.floor(offset * 5)} left={'5%'} width={'40%'}>
                    Control + O:
                </text>
                <text top={Math.floor(offset * 5)} left="40%" width={'40%'}>
                    Overview: Table of Contents
                </text>

                <text top={Math.floor(offset * 6)} left={'5%'} width={'40%'}>
                    Control + A:
                </text>
                <text top={Math.floor(offset * 6)} left="40%" width={'40%'}>
                    About
                </text>

                <text top={Math.floor(offset * 7)} left={'5%'} width={'40%'}>
                    ?:
                </text>
                <text top={Math.floor(offset * 7)} left="40%" width={'40%'}>
                    Help (This Dialog)
                </text>

                <text top={Math.floor(offset * 8)} left={'5%'} width={'40%'}>
                    Control + F:
                </text>
                <text top={Math.floor(offset * 8)} left="40%" width={'40%'}>
                    Introduction: Change the Font
                </text>

                <text top={Math.floor(offset * 9)} left={'5%'} width={'40%'}>
                    Control + V:
                </text>
                <text top={Math.floor(offset * 9)} left="40%" width={'40%'}>
                    Introduction: Change the Color
                </text>

                <text top={Math.floor(offset * 10)} left={'5%'} width={'40%'}>
                    Control + C / Escape / Q:
                </text>
                <text top={Math.floor(offset * 10)} left="40%" width={'40%'}>
                    Quit
                </text>
            </box>
        </>
    )
}
