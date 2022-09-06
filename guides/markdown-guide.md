# Table of Content

- [Introduction](#introduction)
- [Syntax](#syntax)
  - [Heading](#heading)
  - [Inline Formatting](#inline-formatting)
  - [Link](#link)
    - [Relative Link](#relative-link)
    - [Header Link](#header-link)
  - [Image](#image)
  - [Blockquote](#blockquote)
  - [Code Block](#code-block)
  - [List](#list)
    - [Unordered List](#unordered-list)
    - [Ordered List](#ordered-list)
    - [Todo List](#todo-list)
  - [Table](#table)
  - [HTML](#html)
  - [Escape Character](#escape-character)
- [Best Practice](#best-practice)
  - [1. Leave a blank line between paragraphs](#1-leave-a-blank-line-between-paragraphs)
  - [2. Add a space between prefix literals and text](#2-add-a-space-between-prefix-literals-and-text)
- [Reference](#reference)

# Introduction

Markdown is a light-weight syntax for writing **_formatted_** text. It allows you to add styling to text without having to distract and click on any buttons, which makes it a great tool for writing docs and note-taking.

# Syntax

## Heading

Add 1-6 <kbd>#</kbd> and a space before text to make it a heading.

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

<br/>
<br/>

## Inline Formatting

You can wrap words or sentences in special characters to apply styles.

| Style               | Syntax                 | Example                                | Output                           |
| ------------------- | ---------------------- | -------------------------------------- | -------------------------------- |
| Bold                | \*\* \*\* or \_\_ \_\_ | \*\*This is bold text\*\*              | **This is bold text**            |
| Italic              | \* \* or \_ \_         | \*This text is italicized\*            | _This text is italicized_        |
| Strikethrough       | \~\~ \~\~              | \~\~This was mistaken text\~\~         | ~~This was mistaken text~~       |
| All bold and italic | \*\*\* \*\*\*          | \*\*\*All this text is important\*\*\* | **_All this text is important_** |
| Inline Code         | \` \`                  | \`console.log("hello")\`               | `console.log("hello")`           |
| Emoji               | :emoji:                | `:rocket:`                             | :rocket:                         |
| Equation            | \$ \$                  | \$e^{ix}=\cos x+i\sin x\$              | $e^{ix}=\cos x+i\sin x$          |

## Link

Wrap text in `[ ]` followed by a URL in `( )` to write a link.

```markdown
[click here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

Please don't [click here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

### Relative Link

You can link to other files in the same directory with relative links. `./` indicates the current directory, and `../` indicates the parent directory.

```markdown
[HTML Basics](./html-basics.md)
```

[HTML Basics](./html-basics.md)

### Header Link

You can link to a specific header in the same file with header links. The URL should be start with a `#`, followed by the header text in lowercase and with spaces replaced by hyphens.

```markdown
[Inline Formatting](#inline-formatting)
```

[Inline Formatting](#inline-formatting)

## Image

Add a `!` before a link to display an image.

```markdown
![college life](https://media.giphy.com/media/X3Yj4XXXieKYM/giphy.gif)
```

![college life](https://media.giphy.com/media/X3Yj4XXXieKYM/giphy.gif)

Alternative text inside the `[ ]` is displayed when the image fails to load.

## Blockquote

Add `>` and space to quote something.

```markdown
> Any application that can be written in JavaScript, will eventually be written in JavaScript. (Jeff Atwood, 2007)
```

> Any application that can be written in JavaScript, will eventually be written in JavaScript. (Jeff Atwood, 2007)

## Code Block

Use triple backticks `\`` to format code or text into its distinct block.

To add syntax highlighting, specify a language next to the first 3 backticks.

````markdown
```javascript
function sleepSort(array) {
  array.forEach((x) => setTimeout(() => console.log(x), x * 1000));
}
```
````

```javascript
function sleepSort(array) {
  array.forEach((x) => setTimeout(() => console.log(x), x * 1000));
}
```

## List

### Unordered List

Use `-`, `+`, or `*` to create a bullet point.

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
- Item 3
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b
- Item 3

### Ordered List

Prepend a numbers and a period to create a numbered list.

```markdown
1. Item 1
2. Item 2
   1. Item 2a
   2. Item 2b
3. Item 3
```

1. Item 1
2. Item 2
   1. Item 2a
   2. Item 2b
3. Item 3

### Todo List

Use `- [ ]` or `- [x]` to create a task list.

```markdown
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
```

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

## Table

You can use `|` to separate table columns. Then, add a row with `---` below the first to separate the header.

Optionally, you can use `:` to align a column to the left, right, or center.

```markdown
| Name      | Code  |      Price |
| --------- | :---: | ---------: |
| Bitcoin   |  BTC  | $18,982.73 |
| TerraLUNA | LUNA  |  $0.000396 |
```

| Name      | Code  |      Price |
| --------- | :---: | ---------: |
| Bitcoin   |  BTC  | $18,982.73 |
| TerraLUNA | LUNA  |  $0.000396 |

## HTML

You can also use `HTML` directly in Markdown, which allows for more complex formatting. In fact, Markdown is a super-set of HTML, so any valid HTML is actually valid Markdown.

```html
<details>
  <summary>Click to expand</summary>

  ### Heading 1. Foo 2. Bar * Baz * Qux
</details>
```

<details>
  <summary>Click to expand</summary>

### Heading

1. Foo
2. Bar
   - Baz
   - Qux

</details>

<br>

## Escape Character

To display a literal character that would otherwise be used for formatting, add a backslash `\` before it.

```markdown
\*literal asterisks\*
```

\*literal asterisks\*

# Best Practice

## 1. Leave a blank line between paragraphs

| ✅ Do This                        | ❌ Not That                  |
| -------------------------------- | --------------------------- |
| Paragraph 1 <br><br> Paragraph 2 | Paragraph 1 <br>Paragraph 2 |

## 2. Add a space between prefix literals and text

| ✅ Do This          | ❌ Not That       |
| ------------------ | ---------------- |
| # Title<br>3. Item | #Title<br>3.Item |

# Reference

1. [Writing on GitHub - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github)

2. [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#line-breaks)

3. [Markdown Guide](https://www.markdownguide.org/)
