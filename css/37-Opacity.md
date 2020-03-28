# Opacity
1. Specify the opacity/transparency of an element
2. Can take value from `0.0~1.0.` the **lower**,the **more transparent**

## Transparent box
When using the `opacity` property to add transparency to the background of an element, **all** of its child elements **inherit the same trasnparency**. This can make the text inside a fully trasparent element hard to read.

## Transparency using RGBA
If you do not want to apply opacity to child elements,like the upper example,use **RGBA** color values.

<iframe height="265" style="width: 100%;" scrolling="no" title="Opacity boxes" src="https://codepen.io/orientalist/embed/qBdQemx?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/orientalist/pen/qBdQemx'>Opacity boxes</a> by orientalist
  (<a href='https://codepen.io/orientalist'>@orientalist</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
