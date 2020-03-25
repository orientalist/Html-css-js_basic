# Pseudo-classed
## What is Pseudo-class
1. Used to define a special state of an element
2. For example,it can be used to
   - Style an element when a user mouse over it
   - Style visited and unvisited links differently
   - Style an element when it gets focus
  
## Syntax
```css
selector:pseudo-class{
    property:values;
}
```
## Pseudo-classes and CSS classes
1. Can combine both together
2. Example
   ```css
   a.highlight:hover{
       color:#ff0000;
   }
   ```
## Pseudo-classes are also a selector
1. For example,you can set element under specific element with pseudo-class
   ```css
   p{
       display:none;
       background-color:yellow;
       padding:20px;
   }
   div:hover p{
       display:block;
   }
   ```

## `:first-child`
1. The `:first-child` pseudo-class matches a specific element that is **the first child** of another element
2. The following example will match any `<p>` element that is the first child
   ```css
   p:first-child{
       color:blue;
   }
   ```
3. To match first `<i>` element in all `<p>` elements
   ```css
   p i:first-child{
       color:blue;
   }
   ```
4. To match all `<i>` elements in all first child `<p>` elements
   ```css
   p:first-child i{
       color:blue;
   }
   ```
## `:lang`
1. The `:lang` pseudo-class allows you to define special rules for different **languages**
2. The example below defines the quotation marks for `<q>` elements with lang="no"
   ```css
   q:lang(no){
       quotes:"~" "~";
   }
   ```


## Some pseudo-classes
1. :active -link being clicked
2. :checked -checked input
3. :disabled -disabled elements (mostly used on form elements)
4. :empty -match every element that has **no children**(including text nodes)
5. :enabled -enabled elements (mostly used on form elements)
6. :first-of-type -select every elements that is the first child of specific type of its parent
   ```css
   p:first-of-type{
       color:red;
   }
   ```
7. :focus -select the element that has **focus**
   1. The focus selector is allowed that accept keyboard events or ther user inputs
8. :in-range -select the elements with value within a specific range,only works for input element with min/max attributes
9. :invalid -select the elements with invalid values
10. :lang(language) -select elements with a lang attribute value setting with parameter
11. :last-child -select every element that is the last child of its parent
12. :last-of-type -select every element that is the last and specific type of its parent
13. :not(selector) -select every element that is not fit the paramater
14. :nth-child(n) -select every element that is *nth* child of its parent
    1.  n can be number ,keyword or a **formula**
15. :nth-last-child(n) -select every element that is the *nth* child,counting **from the last child**
16. :nth-of-type(n) -select every element that is *nth* and specific type of its oarebt
17. :nth-last-of-type(n) -select every element that is the *nth* and specific type of its parent,counting from the last child
18. :only-of-type -select every element that is only and specific type of its parent
19. :only-child -select every element that is the only child of its parent
20. :option -input element with no "required"
21. :out-of-range -input element with value outside a specific rangd
22. :read-only -elements with "readonly" attribute
23. :read-wtite -elements without "readonly" attribute
24. :required -elements with "required" attribute
25. :root -select the **document's root element**
26. :target -URLs with an **#** followed by an anchor name link to a certain element with a document.The element being linked to is the target element
27. :valid -input with valid value