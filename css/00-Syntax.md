# Syntax
1. `Selector { property : value; property:value; ... }`
   ```css
   h1{
       color:#FF0000;
       font-size:14px;
   }
   ```
2. If the value is multiple,use `"` to cover all values
   ```css
   p{
       font-family:"sans serif";
   }
   ```
## High level css
1. Use `,` to set group, the elements of same group will get same css
   ```css
   h1,h2,h3,h4{
       color:#F00;
   }
   ```
2. Inheritance
   1. The children elements is **default** to get css setting of parents
   ```css
   /*The elements under body will all be setted to `font-family:Verdana,sans-serif`*/
   body{
       font-family:Verdana,sans-serif;
   }
   ```
   2. Some browsers don't apply this setting
      1. Netspace4
      2. IE6
   3. If you don't want specific element apply css of parent,you can set css for it
      ```css
      /*The elements under body will all be setted to `font-family:Verdana,sans-serif`*/
      body{
          font-family:Verdana,sans-serif;
      }
      /*The p element will have it own font-family*/
      p{
          font-family:Times,"Times New Roman",serif;
      }
      ```