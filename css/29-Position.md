# Layout-the position property
The `position` property specifies the type of positioning method used for an element(static,relative,fixed,absolute or sticky).

## The position property
1. Values
   1. static
   2. relative
   3. fixed
   4. absolute
   5. sticky
   
Elements are then positioned using the top,bottom,left and right properties.However ,these properties will not work unless the `position` property is set first.They also work differently depending on the position value.

## static
- HTML elements are positioned static by default.
- Not affect by top,bottom,left and right properties.
- Not positioned in any special way. It is always positioned according to normal flow of the page

## relative
- Positioned relative to its normal position.
- Top,bottom,left or right properties will cause it to be adjusted away from its normal position.
- Other content will not be adjusted to fit into any gap left by the element.

```css
div.relative{
    position:relative;
    left:30px;
}
```

## fixed
- Positioned relative to the **viewport**.
- Stay in same place event if the page scrolled.
- Top,bottom,left and right are used to position the element.
- Will not left any gap in page where it would normally have been located.

```css
div.fixed{
    position :fixed;
    bottom:0;
    right:0;
}
```

## absolute
- Positioned relative to the **nearest positioned ancestor**.
- If an absolute element has no positioned ancestors,it used the **document body** and moves along with page scrolling.
- A "positioned" element is one whose position is anything **except `static`**.

```css
div.outer{
    position:relative;
    width:400px;
    height:200px;
}
div.inner{
    position:absolute;
    top:80px;
    right:0;
    width:200px;
    height:100px;
}
```

## sticky
- Positioned based on the **user's scroll position**.
- Toggles between `relative` and `fixed` ,depending on the scroll position.
- Positioned relative until a given offset position is met in the viewport then it "stick" in place.(like position:fixed)

<iframe height="700px" style="width: 100%;" scrolling="no" title="poJQPYx" src="https://codepen.io/orientalist/embed/poJQPYx?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/orientalist/pen/poJQPYx'>poJQPYx</a> by orientalist
  (<a href='https://codepen.io/orientalist'>@orientalist</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Overlapping elements
1. When elements are positioned,they can overlap other elements.
2. The `z-index` property specifies the stack order of an element(which element should be placed in front of, or behind,the others).
3. A element can have a positive or negative stack order.
4. A element with greater stack order is always in front of an element with a lower stack order
5. If two positioned elements overlap without a `z-index` speficied, the element positioned last in the HTML code will be shown on top.

```css
img{
    position:absolute;
    left:0;
    top:0;
    z-index:-1;
}
```