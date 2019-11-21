import React, { Fragment, useState, useEffect } from 'react'
import shell from 'shelljs'
import { heartRate } from './utils'
import { max } from 'date-fns'
const chalk = (global.chalk = require('chalk'))

const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const csv = fs.readFileSync('heartrate-2019-11-19.csv', 'utf8')
let [, ...records] = parse(csv, {
    columns: true,
    skip_empty_lines: true,
})
records = records.filter(r => {
    const startTime = new Date(parseFloat(r.Timestamp))
    startTime.setHours(8, 0, 0, 0)
    const recordTime = new Date(parseFloat(r.Timestamp))
    return startTime <= recordTime
})

export default function HeartRate({
    top,
    left,
    src = '',
    height = global.screen.height - 15,
    width = global.screen.width - 20,
}) {
    const [startingIndex, setStartingIndex] = useState(0)
    const lastRecord = records.slice(
        Math.min(startingIndex, records.length - width),
        startingIndex + width
    )[0]
    const [minRate, setMinRate] = useState(parseFloat(lastRecord['Heart rate']))
    const [maxRate, setMaxRate] = useState(0)

    useEffect(() => {
        let timer
        if (startingIndex < records.length - 1) {
            timer = setTimeout(function loop() {
                const heartRate = parseFloat(lastRecord['Heart rate'])
                setStartingIndex(startingIndex + 1)
                if (heartRate < minRate) {
                    setMinRate(heartRate)
                }
                if (heartRate > maxRate) {
                    setMaxRate(heartRate)
                }
            }, 100)
        }
        return () => clearTimeout(timer)
    }, [startingIndex, setStartingIndex])

    return (
        <>
            <box top={top} width="100%-6" left={0}>
                {heartRate({
                    records,
                    startingIndex,
                    width,
                    height,
                })}
            </box>
            <text top={'100%-8'} left={'0%+30'}>
                {`Min: ${minRate}`}
            </text>
            <text top={'100%-8'} left={'50%-9'}>
                {lastRecord.Time}
            </text>
            <text top={'100%-8'} left={'100%-45'}>
                {`Max: ${maxRate}`}
            </text>
        </>
    )
}
