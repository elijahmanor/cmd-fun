import React, { Fragment, useState, useEffect } from 'react'
import cardinal from 'cardinal'
import chalk from 'chalk'
import { sep } from 'path'

export default function Highlight({
    prompt = '$',
    pwd = '~',
    separator = '❯',
    git = '',
    command = '',
    top = 0,
    left = 0,
    height = 3,
    width = '100%-10',
}) {
    return (
        <box height={height} width={width} top={top} left={left}>
            {`${chalk.yellow(prompt)} ${chalk.blueBright(pwd)} ${
                git ? chalk.green(`git:${git} `) : ''
            }${chalk.yellow(separator)} ${chalk.white(command)}`}
        </box>
    )
}
