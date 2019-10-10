import React, { Fragment, useState, useEffect } from "react";
import clipboardy from "clipboardy";

export default function CopyButton( { buttonText = "Copy", top, left, height = 3, width = 12, textToCopy } ) {
    const [ text, setText ] = useState( buttonText );
    function handleClick() {
        setText( "Copying..." );
        clipboardy.writeSync(textToCopy);
        setTimeout( () => {
            setText( buttonText );
        }, 500 );
    }
    return (
        <button
            mouse
            border={{type: "line"}}
            height={height}
            width={width}
            top={top}
            left={left}
            onClick={ handleClick }>
            { text }
        </button>
    );
}

