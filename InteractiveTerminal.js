
import React, { lazy, Suspense } from "react";
import MDX from "@mdx-js/runtime";
import { MDXProvider } from "@mdx-js/react";
import Start from "./Start";
import CopyButton from "./CopyButton";
import RunButton from "./RunButton";
import Highlight from "./Highlight";
import Code from "./Code";
import blessed from "neo-blessed";
import reactBlessed from "react-blessed";

let MDXContent = `
<Code code="npx cowsay 'what is up?'" />
`;

const components = {
    h1: ({ children }) => <text bold>{children}</text>,
    p: ({ children }) => <text>{children}</text>,
    Start: () => <Start />,
    CopyButton: ({ ...props }) => <CopyButton {...props} />,
    RunButton: ({ ...props }) => <RunButton {...props} />,
    Highlight: ({ ...props }) => <Highlight {...props} />,
    Code: ({ ...props }) => <Code {...props} />
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