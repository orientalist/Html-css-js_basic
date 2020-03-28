# Float and Clear
1. `float` specifies how an element should float.
2. `clear` specifies what elements can float beside the cleared element and on which side.

## The float property
The `float` property is used for positioning and formating content e.g. let an image float left to the text in a container.
1. Values:
   1. `left` -Floats to the left of its container.
   2. `right` -Floats to the right of its container.
   3. `none` -Does not float.
   4. `inherit` -Inherit float value of its parent.

## The clear property
The `clear` property specifies what element can float beside the cleared element and on which side.
1. Values:
   1. `none` -Allows floating elements on both side. Is default.
   2. `left` -No floating elements allowed on the left side.
   3. `right` -No floating elements allowed on the right side.
   4. `both` -No floating elements allowed on either the left or right side.
   5. `inherit` -The element inherits the clear value of its parent

The most common way to use the `clear` property is after you have used a `float` property on an element.

## The clearfix hack
If a element is taller than the element containing it,and it is floated,it will "overflow" outside its container

<iframe height="265" style="width: 100%;" scrolling="no" title="QWbJQPx" src="https://codepen.io/orientalist/embed/QWbJQPx?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/orientalist/pen/QWbJQPx'>QWbJQPx</a> by orientalist
  (<a href='https://codepen.io/orientalist'>@orientalist</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The `overflow:auto` clearfix works well as long as you are able to keep control of your margins and paddings (else your might see scrollbars).
The new ,modern clearfix hack however is safer to use ,and the following code is used for most webpages.

```css
.clearfix::after{
   content:"";
   clear:both;
   display:block;
}
```