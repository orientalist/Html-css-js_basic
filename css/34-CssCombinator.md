# CSS Combinators
> A combinator is something that explains the relationship between the selectors

A css selector can contain more than one simple selectors,we can include a combinator.

There are 4 different combinators in CSS:
- descendant selector(space)
- child selector(>)
- adjacent sibling selector(+)
- general sibling selector(~)

## Descendant selector
The descendant selector matches all elements that are descendants of a special element.

The following example select all `<p>` elements inside `<div>` elements
```css
div p{
    background-color:yellow;
}
```

## Child selector
The child selector selects all elements that are the children of a specified element.
```css
div > p{
    background-color:yellow;
}
```

## Adjacent sibling selector
The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.

Sibling elements must have the same parent element,and "adjacent" meand **"immediately following"**.
```css
div + p{
    background-color:yellow;
}
```

## General sibling selector
The general sibling selector selects all elements that are siblings of a specified element.

"**General sibling**" means all specified sibling elements **after** the selected one.
```css
div ~ p{
    background-color:yellow;
}
```