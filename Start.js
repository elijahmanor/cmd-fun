import React, { Fragment, useState, useEffect } from "react";

export default function Start() {
    const [ value, setValue ] = useState( 0 );
    const [ isRunning, setIsRunning ] = useState( false );
    function handleClick() {
        setIsRunning( true );
    }
    useEffect( () => {
        if ( isRunning && value < 100 ) {
            setTimeout( function interval() {
                setValue( value + 10 );
            }, 500 );
        }
    } );
    return (
        <Fragment>
            <button
                mouse
                border={{type: "line"}}
                height={3}
                width={10}
                top={2}
                left={0}
                onClick={ handleClick }>
                { value === 0 ? "Start" : ( value === 100 ? "Reset" : "Pause" ) }
            </button>

            <progressbar
                orientation="horizontal"
                filled={ value }
                left="center"
                top="20%"
                height="15%"
                width="80%"
                label="progress"
                border={{type: "line"}}
                style={{border: {fg: "red"}, bar: {bg: "red"}}}
            />
        </Fragment>
    );
}

