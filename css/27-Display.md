# Display
The display property is the most important CSS property for controlling layout.

## The display property
The display property specifies if/how an element is displayed.
Every HTML element has a default display value depending on what type of element it is.The default display value for most elements is `blick` or `inline`

## Block-level Elements
A block-level element always stars on a new line and takes up the full width available(stretches out to the left and right as far as it can)

Examples of block-level elements:
- div
- h1 ~ h6
- p
- form
- header
- footer
- section

## Inline Elements
An inline element does not start on a new line and only takes up as much width as necessary

Examples of inline elements:
- span
- a
- img

## Display:none
Commonly used with JavaScript to hide and show elements without deleting and recreating them.

The `<script>` element uses `display:none` as default

## Override the default display value
Every element has a default display value.However, you can override this.
```css
li{
    display:inline;
}
```

> **Note**:Setting the display property of an element only changes **how the element is displayed**, NOT what kind of element it is. So, an inline element with `display:block;` is not allowed to have other block elements inside in.

## Hide an element-display:none vs visibility:hidden
1. Use `display:none` will hide and the page will be displayed as if the element is not there
2. Use `visibility:hidden` also hide the element but the element will still take up the same space as before