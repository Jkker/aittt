---
title: Node Package Scripts
date: '2022-03-03'
tags: ['environment', 'node', 'development']
draft: false
summary: The "scripts" property of of your package.json file supports custom commands
authors: ['Julius Nedzinskas']
---

I would like to add additional tip regarding **node package scripts**. You can add custom scripts to your `package.json` file under scripts property. This way, you will not need to always type `node src/app.js`. You will be able to run a custom command from your command line that is bound to a specific script in your package configuration.

For example, we can add the `nodemon` script that runs `app.js` to your `package.json` like this:

```json
{
    "scripts": {
        "dev": "nodemon src/app.js"
    }
}
```

This way, you can just type `npm run dev` in your command line to run the `nodemon` script on `app.js` in the `src` folder.

Similarly, we can add a `eslint` script:

```json
{
    "scripts": {
        "dev": "nodemon src/app.js",
        "lint": "eslint . --ext js"
    }
}
```

You can run this custom `eslint` script by typing `npm run lint` in your command line.
