# HTML5

1. Lastest standard of html
2. With new syntax ,img and media element
3. With new API and symplify many things
4. Cross platform
5. The default charset of html5 is `UTF-8`
6. Support by all browsers

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    </body>
</html>
```

# Syntax
1. Empty-`<input disabled/>`
2. Unqoute-`<input value=test/>`
3. Double quote-`<input value="test"/>`
4. Single quote-`<input value='test'/>`

# New symbol
1. New elements-`<header><footer><article><section>`
2. New type of form input-`number,date,datetime`...
3. New image element-`<canvas><svg>`
4. New API-Such like save and load local cookie

# Customer element
1. Add new element by trick of browser(js)
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Creating an HTML Element</title>
        <script>document.createElement("myHero")</script>
        <style>
        myHero {
            display: block;
            background-color: #ddd;
            padding: 50px;
            font-size: 30px;
        } 
        </style> 
    </head>

    <body>
        <h1>My First Heading</h1>

        <p>My first paragraph.</p>

        <myHero>My First Hero</myHero>
    </body>
</html>
```

# New Media Elements
1. audio
2. embed-Outer container(plugin)
3. source-source for video and audio
4. track-track for video and audio
5. video