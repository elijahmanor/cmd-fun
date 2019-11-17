import React, { Fragment, useState, useEffect } from 'react'
import chalk from 'chalk'

const getXY = (index, list, columns) => {
    const rows = Math.ceil(list.length / columns)
    return { x: Math.floor(index / rows), y: Math.floor(index % rows) }
}

export default function TabCompletion({
    top = 0,
    left = 0,
    columns = 4,
    items = [],
    steps = [],
}) {
    const [itemIndex, setItemIndex] = useState(0)
    const [stepIndex, setStepIndex] = useState(0)
    useEffect(() => {
        let timer
        if (stepIndex <= steps.length - 1) {
            timer = setTimeout(function loop() {
                setStepIndex(stepIndex + 1)
                setItemIndex(steps[stepIndex])
            }, 1000)
        }
        return () => clearTimeout(timer)
    }, [setItemIndex, stepIndex, setStepIndex])
    const widthOffset = Math.floor((screen.width - 4) / columns + 1)
    return (
        <box top={top} left={left}>
            {items.map((item, i) => {
                const { x, y } = getXY(i, items, columns)
                return (
                    <text left={x * widthOffset} top={y * 1} key={item}>
                        {i === itemIndex
                            ? chalk.bgWhite.black(item)
                            : item.endsWith('/')
                            ? chalk.red(item)
                            : item}
                    </text>
                )
            })}
        </box>
    )
}
