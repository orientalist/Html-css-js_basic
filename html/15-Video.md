# Video
1. In **html5** use `<video>` with `<source>` to set source
   ```html
   <video width="320" height="240" controls="controls">
       <source src="movie.mp4" type="video/mp4" />
       <source src="movie.ogg" type="video/ogg" />
       <source src="movie.webm" type="video/webm" />
       Your browser does not support the video tag.
    </video>
   ```
2. Best solution
   ```html
   <video width="320" height="240" controls="controls">
       <source src="movie.mp4" type="video/mp4" />
       <source src="movie.ogg" type="video/ogg" />
       <source src="movie.webm" type="video/webm" />
       <object data="movie.mp4" width="320" height="240">
           <embed src="movie.swf" width="320" height="240" />
        </object>
    </video>
   ```
