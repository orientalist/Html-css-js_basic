# Dropdowns

## Concept
1. HTML

Use any element to open the dropdown content,e.g. a `<span>` ,or a `<button>` element.

Use a container element (like `<div>`) to create the dropdown content and add whatever you want inside it.

Wrap a `<div>` element around the elements to position the dropdown content correctly with CSS.


2. CSS
   
The `.dropdown` class uses `position:relative` ,which is needed when we want the dropdown content to placed right below the dropdown button (using `position:absolute)`.

The `.dropdown-content` class holds the actual dropdown content. It is hidden by default,and will be displayed on hover .Note the `min-width` is set to 160px.Feel free to change this.

> **Tip**:If you want the width of dropdown content to be as wide as the dropdown button,set the `width` to `100%`(and `overflow:auto` to enable scroll on small screens).

Instead of using a border, we have use CSS `box-shadow` property to make the dropdown menu look like a "card".

The `:hover` selector is used to show the dropdown menu when the user moves the mouse over the dropdown button.

<iframe height="265" style="width: 100%;" scrolling="no" title="Dropdown" src="https://codepen.io/orientalist/embed/JjdwOYj?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/orientalist/pen/JjdwOYj'>Dropdown</a> by orientalist
  (<a href='https://codepen.io/orientalist'>@orientalist</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>