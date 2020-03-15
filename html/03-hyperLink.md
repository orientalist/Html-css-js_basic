# HypweLink
1. `name`
   1. Used to jump to specific position by anchor
   ```html
   <a name="tip">Jump</a>
   <!--click this hyper link will jump to area with this anchor-->
   <a href="#tip">Will jump to here</a>

   <!--Also can used to outer page-->
   <a href="https://www.test.com.tw/index.html#tip">Jump to outer page and specific position</a>
   ```
2. Please make sure there is `/` in end of href
   1. If there is no `/` in end of href ,server with add and make another request