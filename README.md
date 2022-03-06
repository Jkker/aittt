## Installation

```sh
npm install
```

## Development

First, run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Post

Posts are located in `data/posts`.

### Write a post

Run `npm run compose` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 10 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
```

Here's an example of a post's frontmatter:

```
---
title: Using nodemon to run your app
date: '2022-03-01'
lastmod: '2022-03-02'
tags: ['environment', 'backend']
draft: false
authors: ['Jerry Jia']
summary: Nodemon can automatically restart your Node.js application when your code changes.
layout: PostLayout
canonicalUrl: https://aittt.vercel.app
/posts/using-nodemon
---
```

### MDX Format

[MDX](https://mdxjs.com/) allows you to use JSX in your markdown content. You can import components, such as interactive charts or alerts, and embed them within your content. This makes writing long-form content with components a blast. 🚀

## Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/[name].md` - author information. It is used to generate the author page.

`data/headerNavLinks.js` - navigation links.

`data/posts` - add posts here.

`public/` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images, etc.. from other domains.

## Licence

[MIT](https://github.com/Jkker/aittt/blob/master/LICENSE)

### Acknowledgements

See [Acknowledgements](https://aittt.vercel.app/acknowledgements) for attributions and acknowledgements.
