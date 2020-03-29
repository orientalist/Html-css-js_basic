# CSS Counters
Css counter are "variables" maintained by CSS whose value can be incremented by CSS rules(to track how many times they used).
Counters let you adjust the appearance of content based on its placement in the document.

## Automatic Numbering With Counters
CSS counters are like "variables".
The variable values can be incremented by CSS rules(which will track how many times they are used).
To work with CSS counter we will use the following properties:
- `counter-reset`-Creates or resets a counter
- `counter-increment`-Increments a counter value
- `content`-Inserts generated content
- `counter()`-or `counters()` function -Adds the value of a counter ro an element

To use a CSS counter,it must first be created with `counter-reset`.

The following example creates a counter for the page(in the body selector), then increments the counter value for each `<h2>` element and add "Section `<value of the counter>:`"to the begining of each `<h2>` element:
```css
body{
    counter-reset:section;
}
h2::before{
    counter-increment:section;
    content:"Section "counter(section)": ";
}
```

## Nesting Counter
The following example creates one counter for the page(section) and one counter for each `<h1>` element(subsection).
The "section" counter will be counted for each `<h1>` element with "Section `<value of the section counter>`.", and the "subsection" counter will be counted for each `<h2>` element with "`<value of the section counter>`.`<value of subsection counter>`":
```css
body{
    counter-reset:section;
}
h1{
    counter-reset:subsection;
}
h1::before{
    counter-increment:section;
    content:"Section "counter(section) ". ";
}
h2::before{
    counter-increment:subsection;
    content:counter(section) ". " counter(subsection) "";
}
```

A counter can also be useful to make outlined lists because a new inetance of a counter is automatically created in child elements.
Here we use `counters()` function to insert a string between different levels of nested counter:
```css
ol{
    counter-reset:section;
    list-style-type:none;
}
li::before{
    counter-increment:section;
    content : counters(section,".") " ";
}
```