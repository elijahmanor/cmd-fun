
import React, { lazy, Suspense } from "react";
import MDX from "@mdx-js/runtime";
import { MDXProvider } from "@mdx-js/react";
import Start from "./Start";
import CopyButton from "./CopyButton";
import RunButton from "./RunButton";
import Highlight from "./Highlight";
import blessed from "neo-blessed";
import reactBlessed from "react-blessed";
import { importMDX } from 'mdx.macro';
// const Content = lazy(() => importMDX('./Content.mdx'));

let MDXContent = `
# Hello, world!

This is from MDX with an image :)

<Start />

<Highlight top={20} left={ 0 } code="npx cowsay 'hello'" />

<CopyButton top={22} left={0} textToCopy="npx cowsay 'hello'" />

<RunButton top={22} left={12} textToRun="npx cowsay 'hello'" />

<image
  file="./react-logo.png"
  top="35%"
  left="center"
  width={40}
  height={20}
/>
`;

const components = {
    h1: ({ children }) => <text bold>{children}</text>,
    p: ({ children }) => <text>{children}</text>,
    Start: () => <Start />,
    CopyButton: ({ ...props }) => <CopyButton {...props} />,
    RunButton: ({ ...props }) => <RunButton {...props} />,
    Highlight: ({ ...props }) => <Highlight {...props} />
  }

blessed.classes.forEach( key => {
  const Component = key.toLowerCase();
  components[ key ] = ({ children, ...props }) => <Component { ...props }>{children}</Component> 
} );

export default function Introduction() {
        return <MDXProvider components={components}>
        <MDX>
          {MDXContent}
        </MDX>
      </MDXProvider>;  
}