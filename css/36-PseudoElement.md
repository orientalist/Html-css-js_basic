# Pseudo Elements
A Css pseudo element is used to style specific parts of an element.
For example, it can be used to :
- Style the first letter,or line,of an element
- Insert content before,or after ,the content of an element

## Syntax
```css
selector::pesudo-element{
    property:value;
}
```

## `::after`
Insert **content**(can be text/element/word and etc) after specific element
## `::before`
Insert content before specific element
## `::first-letter`
Select first letter of specific element
**Can only be applied to block-level elements**
## `::first-line`
Select first line of specific element
**Can only be applied to block-level elements**
## `::selection`
Select the portion of an element that is selected by a user

```css
p::after{
    content:'- Remember this';
}
p::before{
    content:'Read this';
}
p::after{
    content:url(cat.jpg);
}

p::first-letter{
    font-size:200%;
    color:'#8A2BE2';
}
p::first-line{
    background-color:yellow;
}

::-moz-selection{
    color:red;
    background-color:yellow;
}
::selection{
    color:red;
    background-color:yellow;
}
```

## Combine with CSS classes
```css
p.intro::first-letter{
    color:#ff0000;
    font-size:100%;
}
```

## Multiple Pseudo-elements
```css
p::first-letter{
    color:#ff0000;
    font-size:xx-large;
}
p::first-line{
    color:#0000ff;
    font-size:small-caps;
}
```


> Double vs single colon( :: vs : )
> The double colon replaced single colon in **CSS3** to distinguish pseudo-class and pseuso-element