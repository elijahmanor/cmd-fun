import React, { useState, useEffect, useRef } from "react";
import terminalImage from "terminal-image";
import termImg from "term-img";

// export default termImg.string("react-logo.png");

export default function Image( { src = "" } ) {
    const imageRef = useRef();
    useEffect(() => {
        const image = termImg.string("react-logo.png");
        imageRef.current.setText(image);
    }, []);
    return (
        <box
            top="10%"
            left="center"
            width="90%"
            align="center"
            height="90%"
            ref={imageRef}>
        </box>
    );
}