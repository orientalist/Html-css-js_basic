# Contextual Selector
1. To set specific css to element by context
   1. For all children fit the condition
   2. For example,set css for `<strong>` under `<li>`
      ```css
      li strong{
          font-style:italic;
          font-weight:normal;
      }
      ```
      ```html
      <h1>
          <!--this strong will get css setting-->
          <strong>A</strong>
          <h2>
              <!--this strong will not get css setting-->
              <strong>B</strong>
          </h2>
      </h1>
      ```