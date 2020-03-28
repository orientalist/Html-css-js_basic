# Horizontal and Vertical align

## Center align elements
To horizontal center a **block** element(e.g. `<div>`),use `margin:auto`.

Setting width of the element will prevent it from stretching out to the edges of its container.

The element will then take up the specific width, and the remaining space will be split equally between the two margins.
```css
.center{
    margin:auto;
    width:50%;
}
```
> **Note**:Center aliging has no effect if the `width` property is not set(because the width is default setted to 100%).

## Center align text
To just center the text inside an element,use `text-align:center;`

## Center an Image
To center an image ,set left and right margin to `auto` and make it into a `block` element

```css
img{
    display:block;
    margin:auto;
    width:40%;
}
```

## Left and Right align-Using position
One method for aliging elements is to use `position:absolute;`
```css
.right{
    position:absolute;
    right:0;
}
```
> **Note**:Absolute positioned elements are removed from the normal flow, and can overlap elements.

## Left and Right align-Using float
Another method for aligning elements is to use the `float` property
```css
.right{
    float:right;
}
```
> **Note**:If an element is taller than the element containing it,and it is float ,it will overflow outside of its container.You can use the "**clearfix**" hack to fix this.

## Center vertically-Using padding
If you know the **actual height** of container element,you can divide the height to two equally part and `padding-top:value` to vertically center the **inline** element.

## Center vertically-Using line-height with vertical-align(better way)
<iframe height="265" style="width: 100%;" scrolling="no" title="oNXQrgx" src="https://codepen.io/orientalist/embed/oNXQrgx?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/orientalist/pen/oNXQrgx'>oNXQrgx</a> by orientalist
  (<a href='https://codepen.io/orientalist'>@orientalist</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Center vertically-Using position and transform
<iframe height="265" style="width: 100%;" scrolling="no" title="Vertically center-position &amp; transform" src="https://codepen.io/orientalist/embed/RwPqzPp?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/orientalist/pen/RwPqzPp'>Vertically center-position &amp; transform</a> by orientalist
  (<a href='https://codepen.io/orientalist'>@orientalist</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Center vertically-Using flexbox
1. `flex` is not support in IE10 and earlier versions
<iframe height="265" style="width: 100%;" scrolling="no" title="Vertically center-flexbox" src="https://codepen.io/orientalist/embed/eYNQwGO?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/orientalist/pen/eYNQwGO'>Vertically center-flexbox</a> by orientalist
  (<a href='https://codepen.io/orientalist'>@orientalist</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>