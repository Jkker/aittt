---
title: Using nodemon to run your app
date: '2022-03-01'
tags: ['environment', 'backend']
draft: false
authors: ['Jerry Jia']
summary: Nodemon can automatically restart your Node.js application when your code changes.
---

If you are tired of **manually restarting** your app EVERY time you **edit a line of code**, try `nodemon`. It monitors for any changes in your source and **automatically restarts** your server.

Using it is super simple:

1. **Install `nodemon`**

```javascript
npm install -g nodemon
```

2. **Swap node with `nodemon` when you run your code.**

```javascript
nodemon src/app.js
```

If you need to manually restart your application, instead of stopping and restarting `nodemon`, you can type `rs` and press enter. More options and flags can be found in its documentation.
