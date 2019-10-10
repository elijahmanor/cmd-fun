import React from "react";
import figlet from "figlet";

export default function Introduction() {
    return <>
        <box
            top="10%"
            left="center"
            width="60%"
            align="center"
            height="25%">
            {
            figlet.textSync('Have Fun and Be', {
                font: 'Big',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
            }
        </box>
        <box
            top="35%"
            left="center"
            align="center"
            width="60%"
            height="25%">
            {figlet.textSync('Productive on the', {
                font: 'Big',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })}
        </box>
        <box
            top="60%"
            left="center"
            width="60%"
            height="25%">
            {figlet.textSync('Command Line', {
                font: 'Big',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })}
        </box>
    </>;
};
  