# Block elements
1. `<h1>`
2. `<div>`
3. `<p>`
4. `<ul>`
5. `<table>`
6. html5
   1. header
   2. section
   3. footer
   4. aside
   5. nav
   6. main
   7. article
   8. figure

# Inline elememts
1. `<b>`
2. `<span>`
3. `<td>`
4. `<a>`
5. `<img>`
6. `<canvas>`


# `<noscript>`
1. Will diaplay when browser forbidden using js
2. Can write all element supposed to be in body

# Set condition for certain version of browser
```html
<head>
  <title>Styling HTML5</title>
  <!--Means if the browser version is less than IE9,load the js-->
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
```

# Html5
1. Cross platform
2. Default charset to `UTF-8`
3. Support by all browser
4. Literal element like`<header>,<footer>...`
5. New type of input like `date,datetime,range...`
6. Can create custom element
   1. If the browser is old version,use
      ```html
      <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
      <![endif]-->
      ```
7. New img element like `<canvas><svg>`