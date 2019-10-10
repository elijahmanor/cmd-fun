import React, { Fragment, useState, useEffect } from "react";
import shell from "shelljs";

const stylesheet = {
    bordered: {
      border: {
        type: 'line'
      },
      style: {
        border: {
          fg: 'blue'
        }
      }
    }
  };

export default function RunButton( { buttonText = "Run", top, left, height = 3, width = 12, textToRun } ) {
    const [ text, setText ] = useState( buttonText );
    const [ log, setLog ] = useState( "" );
    function handleClick() {
        setText( "Running..." );
        shell.exec( text, { silent: true }, ( code, stdout, stderr ) => {
            if ( code === 0 ) {
                setLog( stdout );
            } else {
                setLog( stderr );
            }
            setText( buttonText );
        } );
    }
    return (
        <Fragment>
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
            { !!log.length &&
                <box
                    class={stylesheet.bordered}
                    scrollable
                    top={top + height}
                    width="100%-6"
                    left={0}>
                    { log }
                </box> }
        </Fragment>
    );
}

