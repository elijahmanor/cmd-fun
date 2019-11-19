import React, { Fragment, useState, useEffect } from 'react'
import shell from 'shelljs'
import { heartRate } from './utils'
const chalk = (global.chalk = require('chalk'))

export default function HeartRate({
    top,
    left,
    src = '',
    height = 12,
    width = global.screen.width - 6,
}) {
    const [index, setIndex] = useState(1)
    useEffect(() => {}, [])
    return (
        <box top={top} width="100%-6" left={0}>
            {heartRate({ src: './heartrate-2019-11-18.csv', width })}
        </box>
    )
}
