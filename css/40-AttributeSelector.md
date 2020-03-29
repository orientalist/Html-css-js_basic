# Attribute Selectors
To style HTML elements that have have specific attributes or attribute values.

## CSS [attribute] Selector
The `[attribute]` selector is used to select elements with a specific attribute.

```css
a[target]{
    background-color:yellow;
}
```

## CSS [attribute="value"] Selector
The `[attribute="value"]` selector is used to select elements with specified attribute and value.

```css
a[target="_blank"]{
    background-color:yellow;
}
```

## CSS [attribute~="value"] Selector
The `[attribute~="value"]` selector is used to select elements with an attribute value **containing** a **specified word**.

The following example selects all elements with a title attribute that **contains a space seperated list of words ,one of which is "flower"**.

```html
<span title="plant flower beautiful">I'm a flower</span>
```

```css
[title~="flower"]{
    border:5px solid yellow;
}
```

## CSS [attribute|="value"] Selector
The `[attribute|="value"]` selector is used to select elements with specified attribute **starting with the specified value**.

The value has to be a **whole word**,either **alone**,like class="top" ,or followed by a **hyphen(-)** ,like class="top-text"!

Note:The value of attribute can be multiple.

The value can be multiple but the selected on must be first one.
```html
<span class="top">Hi</span>
<span class="top-one">There</span>
```
```css
[class|="top"]{
    color:red;
}
```

## CSS [attribute^="value"] Selector
The `[attribute^="value"]` selector is used to select element whose attribute value **begins with a specified value**.

The value does not have to be a whole word!

This selector is similar to `[attribute|="value"]`,and the difference is this one don't need to be alone or whole word.

The value can be multiple but the selected on must be first one.
```html
<span class="topo some">Hi!</span>
```
```css
[class^="top"]{
    color:red;
}
```

## CSS [attribute$="value"] Selector
The `[attribute$="value"]` selector is used to select element whose attribute value ends with a specified value.

The value **does not have to be a whole word**!

The value can be multiple but the selected on must be last one.
```html
<span class="some fooend">Hi!</span>
```
```css
[class$="end"]{
    color:red;
}
```

## CSS [attribute*="value"] Selector
The `[attribute*="value"]` selector is used to select element whose attribute value **contains** a specified value.

The value can be **multiple** and does **not have to be a whole word**!
```html
<span class="first kfook last">Hi!</span>
```
```css
[class*="foo"]{
    color:yellow;
}
```