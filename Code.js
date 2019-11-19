import React, { Fragment, useState, useEffect } from 'react'
import cardinal from 'cardinal'
import CopyButton from './CopyButton'
import RunButton from './RunButton'

export default function Highlight({
    code = '',
    top,
    left,
    height = 3,
    width = '100%-6',
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(code)
    let highlightedCode = text
    try {
        highlightedCode = cardinal.highlight(text)
    } catch (e) {}
    const handleSubmit = input => {
        setText(input)
        setIsEditing(false)
    }
    const handleCancel = () => {
        setIsEditing(false)
    }
    const handleEdit = () => {
        setIsEditing(!isEditing)
    }
    return (
        <Fragment>
            <form
                keys
                vi
                focused
                onSubmit={handleSubmit}
                onReset={handleCancel}
                left={left}
                top={top}
                width={width}
                height={`100%-${top + 6}`}
            >
                {isEditing ? (
                    <textbox
                        onSubmit={handleSubmit}
                        left={0}
                        height={1}
                        width={global.screen.width - 6}
                        keys
                        mouse
                        inputOnFocus
                        style={{
                            bg: 'white',
                            fg: 'black',
                            focus: {
                                bg: 'blue',
                            },
                            hover: {
                                bg: 'blue',
                            },
                        }}
                        value={text}
                    />
                ) : (
                    <box height={1} width="100%-6" top={0} left={left}>
                        {highlightedCode}
                    </box>
                )}
                <button
                    mouse
                    border={{ type: 'line' }}
                    height={height}
                    width={12}
                    top={2}
                    left={0}
                    onClick={handleEdit}
                >
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>

                <CopyButton top={2} left={12} textToCopy={text} />

                <RunButton top={2} left={24} textToRun={text} />
            </form>
        </Fragment>
    )
}
