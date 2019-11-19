import React, { useState, useEffect } from 'react'
import figlet from 'figlet'

const h2 = text =>
    figlet.textSync(text, {
        font: 'Calvin S',
        horizontalLayout: 'default',
        verticalLayout: 'default',
    })
const escape = text => text.replace(/([\\`*_{}\[\]()#+\-.!])/g, '\\$1')

export default function Help({ screen, slides, onChange }) {
    return (
        <>
            <box height={'85%'} width={'100%-10'} top={1} left={'0%'}>
                {escape(h2(`${'-'.repeat(15)} DIAGNOSTIC ${'-'.repeat(15)}`))}
            </box>
        </>
    )
}
