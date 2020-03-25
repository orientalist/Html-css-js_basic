# Icon

## How to add icons
1. With a icon library,such as **Font Awesome**
2. Add the name of the specified icon class name to any HTML element(like `<i>` or `<span>`)
3. All the icons in the icon libraries below,are scalable vectors that can be customized with CSS(size,color,shadow,etc.)

## Font Awesome library
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  </head>
  <body>
    <i class="fas fa-cloud"></i>
    <i class="fas fa-heart"></i>
    <i class="fas fa-car"></i>
    <i class="fas fa-file"></i>
    <i class="fas fa-bars"></i>
  </body>
</html>

```

## Bootstrap Icons
```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
  </head>
  <body>
    <i class="glyphicon glyphicon-cloud"></i>
    <i class="glyphicon glyphicon-remove"></i>
    <i class="glyphicon glyphicon-user"></i>
    <i class="glyphicon glyphicon-envelope"></i>
    <i class="glyphicon glyphicon-thumbs-up"></i>
  </body>
</html>
```

## Google Icons
```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </head>
  <body>
    <i class="material-icons">cloud</i>
    <i class="material-icons">favorite</i>
    <i class="material-icons">attachment</i>
    <i class="material-icons">computer</i>
    <i class="material-icons">traffic</i>
  </body>
</html>

```