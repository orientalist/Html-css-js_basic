# Text

1. `color`
   1. To specify color of text
   2. Can be
      1. color name
      2. HEX
      3. RGB
2. `text-align`
   1. To set horizontal alignment of a text
   2. Default is `left`
   3. Values:
      1. left
      2. right
      3. center
      4. justify-Each line is stratched so that every line has eaqal width and the left and right margins are straight
3. `direction` and `unicode-bid`
   1. To change the text direction of element
   2. Values:
      1. rtl-right to lest
      2. ltr-left to right
4. `text-decoration`
   1. To set or remove the decorations from text
   2. Default:none
   3. Values:
      1. overline
      2. line-through
      3. underline
5. `text-transform`
   1. To specify uppercase or lowercase of text
   2. Can be used to turn everything into upper/lowercase or capitalize the first letter of each word
   3. Values:
      1. uppercase-all to uppercase
      2. lowercase-all to lowercase
      3. capitalize-uppercase first word of each word
6. `text-ident`
   1. To specify the identation of the first line of a text
   2. Values:length values(px,em,etc)
7. `letter-spacing`
   1. To specify the space between characters in a text
   2. Values:length values(px,em,etc)
   3. **Can** be negative(-3px)
8. `line-height`
   1. To specify the space between lines
   2. Values:length values(px,em,etc)
9. `word-spacing`
   1. To specify the space between the **word** in a text
10. `text-shadow`
    1. To add shadow to text
    2. Syntax
       1. text-shadow:`[horizontal shadow] [vertical shadow] [color of shadow]`
       ```css
       h1{
           text-shasow:3px 2px red;
       }
       ```
11. `text-overflow`
    1.  Specify how overflowed content that is not displayed should be signaled to the user.
    2.  Both of the following properties are required for text-overflow
        1.  `white-space:nowrap`
        2.  `overflow:hidden`
    3.  Values:
        1.  clip-Default(no replacement)
        2.  ellipsis-...
        3.  string-replace with specific string(only work on firefox)
        4.  initial
        5.  inherit
12. `white-space`
    1.  Specify how **white-space** indide an element handled
    2.  Values:
        1.  normal-default
            1. Sequence of whitespace will collapse into single whitespace
            2. Text will wrap when necessary
        2. nowrap
           1. Sequence of whitespace will collapse into single whitespace
           2. Text will **never** wrap to nexgt line
           3. The text conticues on the same line unitl a `<br/>`
        3. pre
           1. Whitespace is preserved by browser(will not shrink)
           2. Text will only wrap on line break like `<pre>`
        4. pre-line
           1. Sequence of whitespace will collapse into a single whitespace
           2. Text will wrap when necessary and on line break
        5. pre-wrap
           1. Whitespace is preserved by the browser
           2. Text will wrap when necessary and on line break
        6. initial
        7. inherit