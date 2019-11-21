export const centerFiglet = (text, width) => {
    const lines = text.split('\n')
    const longestLine = lines.reduce((memo, line) => {
        memo = line.length > memo ? line.length : memo
        return memo
    }, 0)
    const surroundingPadding = width - longestLine
    const leftPadding = Math.floor(surroundingPadding / 2)
    return leftPadding >= 0
        ? lines.map(line => `${' '.repeat(leftPadding)}${line}`).join('\n')
        : text
}

const babar = require('babar')
const format = require('date-fns/format')
const asciichart = require('asciichart')
export const heartRate = ({ records, startingIndex, width, height }) => {
    records = records.slice(
        Math.min(startingIndex, records.length - width),
        startingIndex + width
    )
    records = records.map(r => parseFloat(r['Heart rate']))
    return asciichart.plot(records, { height })
    records = records.map(record => {
        const heartRate = parseFloat(record['Heart rate'])
        let [hour, minute] = format(
            new Date(parseInt(record.Timestamp)),
            'kk:mm'
        ).split(':')
        const time = parseFloat(hour) + parseFloat(minute) / 60
        return [time, heartRate]
    })
    return babar(records, {
        color: 'green',
        height: 20,
        width,
        yFractions: 0,
    })
}
