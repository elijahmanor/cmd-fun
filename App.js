
import React, { Component, useState, useEffect } from 'react';
// import blessed from 'blessed';
// import { render } from 'react-blessed';
import blessed from 'neo-blessed';
import { createBlessedRenderer } from 'react-blessed';

import Introduction from "./Introduction.js";
import Mdx from "./Mdx.js";
import InteractiveTerminal from "./InteractiveTerminal.js";

const render = createBlessedRenderer(blessed);

const fs = require('fs');
const ansimd = require('ansimd');
const markdown = fs.readFileSync('./Readme.md');

class Interactive extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick( direction ) {
    const { count  } = this.state;
    this.setState( { count: direction === "+" ? count + 1 : count - 1 } );
  }

  render() {
    const { count } = this.state;
    return <box>
      
      {count}
      
      <button mouse border={{type: 'line'}} height={3} width={3} top={2} left={4} onPress={a => this.handleClick('+')}>+</button>
      <button mouse border={{type: 'line'}} height={3} width={3} top={2} onPress={a => this.handleClick("-")}>-</button>
    </box>;
  }
}

const CONTENT = [
  { title: "Introduction", content: <Introduction /> },
  { title: "String Content", content: `I support string content` },
  { title: "Markdown Content", content: ansimd( markdown ) },
  { title: "Interactive React Component", content: <Interactive /> },
  { title: "MDX", content: <Mdx /> },
  { title: "Interactive Terminal Slide", content: <InteractiveTerminal /> }
];

const pad = (n, width, z) => {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.updateIndex = this.updateIndex.bind( this )
  }

  componentDidMount() {
    screen.key(["right", "left"], this.updateIndex );
  }

  updateIndex(ch, key) {
    const { index } = this.state;
    let newIndex = 0;
    if ( key.name === "right" ) {
      newIndex = index < CONTENT.length - 1 ? index + 1 : index;
    } else if ( key.name === "left" ) {
      newIndex = index === 0 ? 0 : index - 1;
    }
    this.setState( { index: newIndex } );
  };

  render() {
    const { index } = this.state;
    const currentSlide = CONTENT[ index ];
    return (
      <>
        <box label={ currentSlide.title }
           border={{type: 'line'}}
           style={{border: {fg: 'blue'}}} 
           width="100%"
           height="100%"
           padding={{ left: 2, right: 2, top: 2, bottom: 2 }}
           draggable={false}>
          { currentSlide.content }
        </box>
        <text top="100%-2"
          left="100%-10"
          valign="bottom">{ `${ pad( index + 1, 2 ) } of ${ pad( CONTENT.length, 2 ) }` }</text>
      </>
    );
  }
}

const screen = global.screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Terminal Slideshow'
});

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

const component = render(<App />, screen);
