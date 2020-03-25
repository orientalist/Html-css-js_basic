# How to use CSS
1. Outer file by `<link>`
   1. `rel` means relation ,set `stylesheet`
   2. `type` means type of file, set `text/css`
   3. `href` means the location of css file
   ```html
   <head>
       <link rel="stylesheet" type="text/css" href="style.css"/>
   </head>
   ```
2. In HTML by `<style>`
   1. `type` means type of this block, set `text/css`
   ```html
   <head>
       <style>
           .header{
               font-size:2rem;
           }
       </style>
   </head>
   ```
3. Inline by attribute `style` of element
   ```html
   <p style="color:red">Hello World!</p>
   ```
4. The order of setting css to element
   1. Inline=>Style in header=>Outer file