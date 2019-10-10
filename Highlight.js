import React, { Fragment, useState, useEffect } from "react";
import cardinal from "cardinal";

export default function Highlight( { code = "", top, left, height = 3, width = "100%-6" } ) {
    code = cardinal.highlight( code );
    return (
        <box
            height={height}
            width={width}
            top={top}
            left={left}>
            { code }
        </box>
    );
}

