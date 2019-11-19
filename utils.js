export const centerFiglet = (text, width) => {
    const lines = text.split('\n')
    const longestLine = lines.reduce((memo, line) => {
        memo = line.length > memo ? line.length : memo
        return memo
    }, 0)
    const surroundingPadding = width - longestLine
    const leftPadding = Math.floor(surroundingPadding / 2)
    return leftPadding
        ? lines
              .map(line => `${' '.repeat(surroundingPadding / 2)}${line}`)
              .join('\n')
        : text
}

const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const babar = require('babar')
const format = require('date-fns/format')
export const heartRate = ({ src, width }) => {
    const csv = fs.readFileSync(src, 'utf8')
    let [, ...records] = parse(csv, {
        columns: true,
        skip_empty_lines: true,
    })
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
