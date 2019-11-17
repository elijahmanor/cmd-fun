import React, { Fragment, useState, useEffect } from 'react'
// import terminalLink from 'terminal-link'

const ESC = '\u001B['
const OSC = '\u001B]'
const BEL = '\u0007'
const SEP = ';'

const terminalLink = (text, url) => {
    return [OSC, '8', SEP, SEP, url, BEL, text, OSC, '8', SEP, SEP, BEL].join(
        ''
    )
}

export default function Link({ top, left, height = 3, width = 50, text, url }) {
    const link = terminalLink(text, url)
    return (
        <text height={height} width={width} top={top} left={left}>
            {link}
        </text>
    )
}
