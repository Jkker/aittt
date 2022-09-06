# Table of Content

- [Introduction](#introduction)
- [Basic HTML Elements](#basic-html-elements)
  - [Heading](#heading)
  - [Text](#text)
  - [Link](#link)
    - [Attribute](#attribute)
  - [Image](#image)
    - [Empty Element](#empty-element)
  - [List](#list)
    - [Unordered](#unordered)
    - [Ordered](#ordered)
- [The DOM](#the-dom)
- [Reference](#reference)

# Introduction

HTML is the standard markup language that defines the **content** of web pages.

# Basic HTML Elements

Each `html` element is defined by a **tag**, which can be either an **`<opening>`** or a **`</closing>`** tag.[^gettingstarted]

![Anatomy of an HTML element](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-small.png)

The content of a element can be text, other elements, or empty.

## Heading

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

## Text

| Example                    | Output                   |
| -------------------------- | ------------------------ |
| `<p>Paragraph</p>`         | <p>Paragraph</p>         |
| `<b>Bold</b>`              | <b>Bold</b>              |
| `<i>Italic</i>`            | <i>Italic</i>            |
| `<em>Emphasis</em>`        | <em>Emphasis</em>        |
| `<u>Underline</u>`         | <u>Underline</u>         |
| `<s>Strike Through</s>`    | <s>Strike Through</s>    |
| `<code>Inline Code</code>` | <code>Inline Code</code> |

## Link

Anchor tags are used to create links.

```html
<a href="https://www.youtube.com/watch?v=ok-plXXHlWw"
  >HTML in 100 Seconds - YouTube</a
>
```

<a href="https://www.youtube.com/watch?v=ok-plXXHlWw">HTML in 100 Seconds - YouTube</a>

### Attribute

Attributes provide _additional information_ about an element. They are defined in the **opening** tag and consist of a name and a value, separated by an equals sign.

In the anchor tag example above, the `href` attribute specifies the URL to the link.

![Attributes look like this](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-attribute-small.png)

## Image

```html
<img
  src="https://media.giphy.com/media/9SDGePLWGhzwRFg1Xx/giphy.gif"
  alt="Everyday One Cat"
/>
```

<img src="https://media.giphy.com/media/9SDGePLWGhzwRFg1Xx/giphy.gif" alt="Everyday One Cat">

### Empty Element

Not all elements have content. For example, the `<img>` element do not enclose anything but its attributes, so no closing tag is required.

## List

### Unordered

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

### Ordered

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

# The DOM

As you see above, HTML tags can be nested to form a tree-like structure. This is called the **Document Object Model** (DOM). [^dom]

A typical DOM tree looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </body>
</html>
```

- The first line `<!DOCTYPE html>` is not an HTML element, but a **declaration** that tells the browser that the document is an HTML document.

- The `<html>` HTML element represents the **root** (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.[^html]

- The `<head>` element contains **machine-readable information** (metadata) about the document, like its title, scripts, and style sheets.

- The `<body>` HTML element represents the **content** of an HTML document. All the **visible** contents, such as headings, paragraphs, images, etc. should be placed **inside**.

# Reference

[^gettingstarted]: [Getting started with HTML | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
[^dom]: [Introduction to the DOM | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
[^html]: [HTML elements reference | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
