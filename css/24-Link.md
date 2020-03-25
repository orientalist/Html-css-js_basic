# Link
1. You can style by different way with CSS
2. Style properties
   1. `color`
   2. `font-family`
   3. `background`
   4. etc ...
3. In addition ,links can be styled differently depending on what `state` they are in.
   1. The **four** states are:
      1. `a:link`-a normal, unvisited link
      2. `a:visited`-a link the user has visited
      3. `a:hover`-a link when the user mouses over it
      4. `a:active`-a link the moment it is clicked
         ```css
         a:link{
             color:red;
         }
         a:visited{
             color:green;
         }
         a:hover{
             color:hotpink;
         }
         a:active{
             color:blue;
         }
         ```
      5. When setting the style for several link state,there are some order rules:
         1. `a:hover` Must come after `a:link` and `a:visited`
         2. `a:active` Must come after `a:hover`
