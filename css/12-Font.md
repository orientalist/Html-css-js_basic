# Font

## Serif and Sans-serif
1. Both are system default font-family
2. Can be set after font-family you want with `,`,means if user's system doesn't have the font-family you want,it will apply font-family after `,`
   ```css
   h1{
       font-family:family-you-want,serif;
   }
   ```
    ![](./resources/serif.gif)

## Font families
1. There are two types of font family names
   1. generic family-A group of font family with similar look
      1. Serif-Have small lines at the ends on some characters
      2. Sans-serif-Sans means without
      3. Monospace-All monospace characters have same width
   2. font family-A specific font family
   
## `font-family`
1. Be set to text of element
2. Should hold several font names as a 'fallback' system.If the browser doesn't support the first font,it tries the next one and so on
3. Start with the font you want and end with generic family.
4. If the name on font family is more than one word,use `"` to surround it
   ```css
   h1{
       font-family:"Times New Roman",Times,serif;
   }
   ```

## `font-style`
1. Mostly used to specify italic text
2. Values:
   1. normal
   2. italic
   3. oblique(similar to italic but less supported)

## `font-size`
1. Absolute size:
   1. Set to specific size(px,pt,em,etc)
   2. Same size in all browser
   3. Useful when the physical size of output is known
2. Relative siez:
   1. Set to relative to the surrounging elements
   2. Allow to change by size of browser
3. **Dedault size is 16px**
4. Set `font-size` with `em`
   1. To allow user to resize the text
   2. 1em is equal to **current font size**.The default text size in browser is **16px**.So the default size of 1em is 16px
   3. So you can change all size of text by changing the em size
5. Combination of `percent` and `em`
   1. To make sure the font-size works in all browses,is to set a default font-size in percent for `<body>` element
   ```css
   body{
       font-size: 100%;
    }
    .txt{
        font-size: 2em;
    }
   ```

6. Responsive font size
   1. The font-size can be set with `vw` unit,which means the `"view port width"`
   2. That way the text size will follow the size of the browser window
## `font-weight`
1. Specify the weight of a font
2. Values
   1. Length(px,pt,etc)
   2. Setted values:
      1. normal
      2. bold
      3. bolder
      4. thin
   
## `font-variant`
1. Specify whether or not a text should be displayed in a small-caps font
2. In a small-caps font,all lowercase letters are converted to uppercase.
3. However,the converted uppercase letters appears in a smaller font size than the origin uppercase letters in the text
   ```css
   p.normal{
       font-variant:small-caps;
   }
   ```