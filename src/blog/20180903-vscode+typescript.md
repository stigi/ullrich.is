---
title: 'Make VS Code ❤ Typescript even more'
description: A quick guide on how to setup Typescript
date: '2018-09-03'
image: ''
path: '/thinking-about/vs-code-and-typescript'
---

I’ve been writing a lot of React Native code recently. And when I’m doing so I do it exclusively in Typescript and VS Code. It’s just a natural fit to me. VS Code has great support for Typescript out of the box, but one thing that bugged me for a while was that it would only analyze open files for TS problems. It doesn’t have to be like that though.

The TS compiler supports a --watch mode which allows you to observe your entire project for problems. You could run it in your terminal and it would trigger on every file save. Using iTerms you can ⌘-Click to jump back to to VS Code. But wouldn’t it be great to have the problems appear in your editor right away? Even across files you haven’t opened yet? Here’s how!

The trick is to run tsc --watch as a task in VS Code. To do so edit your .vscode/tasks.json file and add the following configuration:

```
{
  "version": "2.0.0",
  "tasks": [
    // ... ,
    {
      "label": "Monitor TS Errors",
      "command": "./node_modules/.bin/tsc",
      "type": "shell",
      "args": ["--watch", "--noEmit", "--project", "."],
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "isBackground": true,
      "auto": true,
      "problemMatcher": "$tsc-watch"
    }
  ]
}
```

What this does is creating a background task with the name Monitor TS Errors that you can start via the Run Tasks command. The tasks starts the Typescript compiler tsc in watch mode without emitting output. VS Code already ships with a problem matcher to parse the output and use it in the problems panel.

As a result you’ll also see a new 🛠 icon right in your status bar showing you that there’s one task running.

Great! Now if you just pasted that snippet you’ll notice that the editor complains about the "auto": true line. That one is responsible for auto starting the watcher whenever you open the project. This is powered by the AutoLaunch extension which I highly recommend for this kind of tasks.

So why not go the extra mile and help other team members by recommending said extension when they work on the repo as well? You can do so by adding it to .vscode/extensions.json like so:

```
{
  "recommendations": [
    // other extensions...
    "philfontaine.autolaunch",
  ],
}
```

Be prepared for a thousand high fives from your team mates coming your way!

Props to the folks discussing this in https://github.com/Microsoft/vscode/issues/13953! And thanks @philfontaine for the AutoLaunch extension!
