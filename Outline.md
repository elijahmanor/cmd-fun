---
title: Have Fun and Be Productive on the Command Line
tags: talk, manorism, conference
description: View the slide with "Slide Mode".
---

# Have Fun and Be Productive on the Command Line

## Outline

### Shell Tricks

-   `How to` Switch to z-shell using `Oh-My-Zsh`
-   `How to` Switch themes and plugins with `Oh-My-Zsh`
-   `How to` Get rid of that `last login` message
    -   `touch ~/.hushlogin`
-   `How to` String sring together comamnds on the terminal
    -   https://github.com/busyloop/lolcat
-   `How to` Quickly switch to your previous git branch
-   `How to` Quickly cd to a newly created directory
-   `How to` Use Unix brace expansion to gernate multiple commands
-   `How to` Add aliases for long cumbersome Terminal commands
-   `How to` Quickly navigate to frequently used folders with `z`
-   `How to` Provide visual and auditory feedback to long running Terminal commands
-   `How to` View your local weather on the terminal
    -   `curl wttr.in`
    -   https://github.com/chubin/wttr.in
-   `How to` Add npm version to oh-my-zsh theme
-   `How to` Install helpful tools with `homebrew`
    -   `homebrew` - the missing package manager for macOS
-   `How to` Kick up a quick web server

### Npm Tips and Tricks

-   `How to` List available npm scripts
    -   `npm run`
    -   [npm-quick-run](https://www.npmjs.com/package/npm-quick-run)
    -   https://github.com/paprikka/lana-cli
-   `How to` List top level dependencies
    -   `npm -g ls —depth-0`
    -   `npm i npmlist`
-   `How to` Run a locally installed node modules from the terminal
    -   `npx`
-   `How to` Temporarily download and run a node module from `npm`
    -   `npx`
-   `How to` Visually update local dependencies with `npm-check`
    -   `npm-check`

### Git Tips and Tricks

-   `How to` Add a set of helpful commands to git using `hub`
    -   [hub](https://twitter.com/elijahmanor/status/747499860123914240)
-   `How to` List your most recent local git branches
    -   custom git alias
-   `How to` Clean up completed local and remote branches
    -   custom git alias
    -   hub command
-   `How to` Automatically run `npm` tasks on git hooks
    -   Husky
-   `How to` Make your git diffs look great with `diff-so-fancy`
    -   `npm install -g diff-so-fancy`
    -   https://github.com/so-fancy/diff-so-fancy
-   `How to` Visually interact with `git` from the Terminal with `tig`
    -   https://jonas.github.io/tig/

### Command Line Tools

-   `How to` Visually see folder structure from the Terminal
    -   `brew install tree`
-   `How to` View a graphical activity monitor from the Command Line
    -   `vtop` - Wow such top. So stats. More better than regular top
        -   http://parall.ax/vtop
        -   https://github.com/MrRio/vtop
    -   `htop` - An interactive process viewer for Unix systems
        -   http://hisham.hm/htop/
-   `How to` Test your internet speed from the Terminal
    -   `speed-test` - Test your internet connection speed and ping using speedtest.net from the CLI
    -   https://www.npmjs.com/package/speed-test
-   `How to` Visually check your disk usage from the Terminal
-   `How to` Quickly kick up an HTTP Server from the Terminal
    -   python
    -   node - serve
    -   `npm install -g http-server`
-   `How to` Manage git from the Terminal with `lazygit`
-   `How to` See what Node modules are npm linked with `link-status`
    -   link-status
-   `How to` Quickly navigate folders on the Terminal
    -   https://ranger.github.io/
-   `How to` Visually manage docker containers from the terminal
    -   Immersive terminal interface for managing docker containers and services
    -   https://github.com/lirantal/dockly
-   `How to` Safely delete files from the terminal
    -   `brew install trash`
-   `How to` View Simplified and Community-Driven man pages via `tldr`
    -   https://tldr.sh/
    -   http://npm.im/tldr
-   `How to` View the password for your current WiFi network
    -   `brew install wifi-password`
-   `How to` Get instant Coding Answers via the terminal with `howdoi`
    -   https://github.com/gleitz/howdoi
    -   `brew install howdoi`
-   `How to` Create a Terminal Dashboard
    -   https://wtfutil.com/
    -   tiny-care-terminal
-   `How to` Use the Terminal for a Slide Show Presentation
    -   https://github.com/tslide/tslide
-   `How to` Interactively kill processes
    -   npx fkill-cli

### Create Your Own Tool

-   `How to` Create a custom Bash Script
-   `How to` Create a custom Node Program
    -   commander
    -   chalk
    -   inquirer
    -   shells
-   `How to` Create a custom React Program
    -   https://github.com/chjj/blessed
    -   https://github.com/Yomguithereal/react-blessed
    -   https://github.com/vadimdemedes/ink
    -   https://github.com/vadimdemedes/create-ink-app

### Fun

-   `How to` Make your Mac talk to you with `say`
-   `How to` Make fun comic messages with `cowsay`
-   `How to` Make fun banner messages with `figlet`
-   `How to` Watch an ASCII version of Star Wars
    ```
    telnet towel.blinkenlights.nl
    nc towel.blinkenlights.nl 23
    ```
-   `How to` Enter the Matric with `cmatrix`
-   `How to` Play games in `emacs`
    ```
    esc+X
    pong, snack, solitaire, tetris <enter>
    ctrl+X ctrl+c
    ```

### Misc

-   `How to` Free up disk space from npm, yarn, brew, and docker
    ```
    npm cache clean --force # clans up npm
    yarn cache dir          # shows where cache is stored
    yarn cache list         # lists everything in cache
    yarn cache clean        # cleans the cache
    brew uninstall yarn     # uninstall yarn
    brew cleanup -n         # shows what would cleanup
    brew cleanup            # cleans up brew
    TODO: Need command here # cleans up docker
    ```

## Other Ideas (Not Part of Outline Yet)

### Command Line Tools

-   codemods

### Git

-   https://github.com/git-tips/tips

### Node

-   [making a node CLI app](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)
-   https://dev.to/nickytonline/my-mac-setup-2m05
-   [12 Factor CLI Apps – Jeff Dickey – Medium](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46)
-   [Ervy - Bring charts to terminal.](https://www.chunqiuyiyu.com/ervy/#started)
-   [Introduction to web scraping with Node.js](https://dev.to/aurelkurtula/introduction-to-web-scraping-with-nodejs-9h2)
-   https://github.com/gribnoysup/wunderbar

### Misc Research

-   `brew install asciinema`
-   `brew install fd`
-   `npm install -g gzip-size-cli`

### Misc Links

https://dev.to/carminezacc/bash-scripting-for-everyday-actions-403o
https://github.com/Kikobeats/awesome-cli
https://github.com/k4m4/terminals-are-sexy
https://github.com/smallhadroncollider/taskell
https://towardsdatascience.com/trick-out-your-terminal-in-10-minutes-or-less-ba1e0177b7df
https://gist.github.com/brandonb927/3195465/
https://gist.github.com/bradp/bea76b16d3325f5c47d4
https://github.com/tslide/tslide
https://spacevim.org/quick-start-guide/
https://github.com/k4m4/terminals-are-sexy
https://github.com/lirantal/dockly
https://wtfutil.com/
https://github.com/compscilauren/awesome-git-hooks#readme
https://www.npmjs.com/package/speed-test
https://en.wikipedia.org/wiki/2048_(video_game)
https://towardsdatascience.com/trick-out-your-terminal-in-10-minutes-or-less-ba1e0177b7df
https://terminalsare.sexy/

### Bash

-   https://dev.to/carminezacc/bash-scripting-for-everyday-actions-403o
-   https://devhints.io/bash
-   https://code.tutsplus.com/tutorials/the-fundamentals-of-bash-scripting--net-32093
-   https://ryanstutorials.net/bash-scripting-tutorial/bash-loops.php
-   https://www.tutorialspoint.com/unix/shell_scripting.htm
-   https://linuxconfig.org/bash-scripting-tutorial-for-beginners#h17-bash-loops
-   https://www.shellscript.sh/quickref.html
-   https://likegeeks.com/bash-script-easy-guide/
