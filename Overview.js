import React, { useState, useEffect } from 'react'
import figlet from 'figlet'
import { numericLiteral } from '@babel/types'
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

const getTop = (topicIndex, numberOfTopics, screenHeight) => {
    const offset = Math.floor(screenHeight / (numberOfTopics / 3 + 0.5))
    const relativeIndex = Math.floor(topicIndex / 3)
    return relativeIndex * offset
}

export default function Overview({ screen, slides, onChange, showAll = true }) {
    let topics = slides.reduce((memo, slide, index) => {
        const title = slide.slug || slide.title
        if (!memo.some(s => s.title === title)) {
            memo.push({
                title,
                index,
            })
        }
        return memo
    }, [])
    topics = topics.filter(t => !['Modules', 'About'].includes(t.title))
    if (!showAll) {
        topics = topics.filter(t => !['Intro', 'Outro'].includes(t.title))
    }
    return (
        <>
            {topics.map((topic, index) => (
                <button
                    mouse
                    border={{ type: 'line' }}
                    height={5}
                    width={'30%'}
                    top={`0%+${getTop(index, topics.length, screen.height)}`}
                    left={
                        index % 3 === 0 ? '0%' : index % 3 === 1 ? '33%' : '66%'
                    }
                    key={topic.title}
                    onClick={onChange.bind(null, topic.index)}
                >
                    {centerFiglet(
                        figlet.textSync(`${index + 1}: ${topic.title} →`, {
                            font: H2_FONTS[5],
                            horizontalLayout: 'default',
                            verticalLayout: 'default',
                        }),
                        screen.width * 0.3
                    )}
                </button>
            ))}
        </>
    )
}
