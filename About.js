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

export default function Help({ screen, slides, onChange }) {
    const name = centerFiglet(
        figlet.textSync(`Elijah Manor`, {
            font: H2_FONTS[5],
            horizontalLayout: 'default',
            verticalLayout: 'default',
        }),
        screen.width - 15
    )
    const bio = centerFiglet(
        `
         Christian and Family Man          
Senior Front-End Dev at @planview @leankit
  Makes videos at @eggheadio @pluralsight
    `,
        screen.width - 15
    )
    const links = centerFiglet(
        ` https://${chalk.blue('twitter')}.com/${chalk.yellow('elijahmanor')}
             https://${chalk.yellow('elijahmanor')}.com
  https://${chalk.blue('github')}.com/${chalk.yellow('elijahmanor')}
https://${chalk.blue('linkedin')}.com/${chalk.yellow('elijahmanor')}
                     ${chalk.yellow('elijahmanor')}@${chalk.blue('gmail')}.com
               $ npx ${chalk.yellow('elijahmanor')}`,
        screen.width + 10
    )
    const about = `${name}\n\n${bio}\n\n${links}`
    return (
        <>
            <box height={'30%'} width={'100%-15'} top={`15%`} left={'0%+4'}>
                {about}
            </box>
        </>
    )
}
