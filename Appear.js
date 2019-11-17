import React, { Fragment, useState, useEffect } from 'react'

export default function Appear({ top = 0, children, order = 0 }) {
    const [index, setIndex] = useState(order)
    useEffect(() => {
        function handleKey(ch, key) {
            if (key.name === 'down') {
                setIndex(
                    index + 1 < React.Children.count(children)
                        ? index + 1
                        : index
                )
            } else if (key.name === 'up') {
                setIndex(index - 1 >= 0 ? index - 1 : 0)
            }
        }
        screen.key(['up', 'down'], handleKey)
        return () => screen.unkey(['up', 'down'], handleKey)
    }, [index, setIndex])
    const kids = React.Children.toArray(children).slice(0, index + 1)
    // console.log(index, kids.length)
    return <box top={top}>{kids}</box>
}
