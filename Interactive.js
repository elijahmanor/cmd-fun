import React, { lazy, Suspense } from 'react'
import MDX from '@mdx-js/runtime'
import { MDXProvider } from '@mdx-js/react'
import Start from './Start'
import CopyButton from './CopyButton'
import RunButton from './RunButton'
import Highlight from './Highlight'
import Code from './Code'
import blessed from 'neo-blessed'
import reactBlessed from 'react-blessed'

export default class Interactive extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(direction) {
        const { count } = this.state
        this.setState({ count: direction === '+' ? count + 1 : count - 1 })
    }

    render() {
        const { count } = this.state
        return (
            <box>
                {count}

                <button
                    mouse
                    border={{ type: 'line' }}
                    height={3}
                    width={3}
                    top={2}
                    left={4}
                    onPress={a => this.handleClick('+')}
                >
                    +
                </button>
                <button
                    mouse
                    border={{ type: 'line' }}
                    height={3}
                    width={3}
                    top={2}
                    onPress={a => this.handleClick('-')}
                >
                    -
                </button>
            </box>
        )
    }
}
