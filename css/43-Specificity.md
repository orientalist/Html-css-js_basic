# CSS Specificity
If there are two or more confliting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.

Think of specificity as a **score/rank** that determines which style declarations are **untimately wins out**.

The universal selector **(*)** has low specificity ,while **ID** selectors are highly specific!

> **Note**:Specificity is a common reason why your CSS-rules don't apply to some elements ,although you think they should.

## Specificity Hierarchy
Every selector has its place in the specificity heirarchy.
There are four catagories which define the specificity level of a selector.

1. **Inline styles** - An inline style is attached directly to the element to be styled.
2. **IDs** - An ID is a unique identifier for the page elements,such as `#navbar`
3. **Classes,attributes and pseudo-classed** - This category includes `.classes`,`[attribute]` and `pseudo-classes` such as `:hover` ,`:focus` etc.
4. **Elements and pseudo-elemens** - This category includes element **names** and **pseudo-elements**,such as `h1` ,`div`,`:before` and `:after`.

## How to Calculate Specificity
Memorize how to calculate specificity!
Start at 0
- add **1000** for style attribute
- add **100** for each **ID**
- add **10** for each attribute,class or pseudo-class
- add **1** for each element name or pseudo-element

> Example
> > h1=>1
> #content h1=>(100+1)=101
> `<div id="content"><h1 style="color:#ffffff">Heading!</h1></div>`=>1000

Since 1<101<1000 ,the third one had the greatest level of specificity ,and therefore will be applied.

## Specificity Rules
**Equal specificity**:**the lastest rule counts**-If the same rule is written twice into the external style sheet ,then the lower rule in the style sheet is closer to the element to be styled, and therefore will be applied.

```css
h1 {background-color:yellow;}
h1 {background-color:red;}
```
the latter rule is always applied

**Contextual selectors are more specific than a single element selector**-The **embeded**(`<style>` in head) style sheet is closer to the element to be styled.
1. Inline style
2. Head style
3. External css style
4. Browser default style

**The universal selector and inherited value have a specificity of 0**-**`*`**,`body *` and similar have a zero specificity.
Inherited values also have a specificity of 0.