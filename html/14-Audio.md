# Audio in html

## How to play audio in html
1. html5
   1. `<embed height="100" width="100" src="song.mp3"/>`
      1. Supported by all browser
      2. Container for external application or interactive content
   2. `<audio></audio>`
      1. Supported by IE, Chrome, Safari
      ```html
      <audio controls="controls">
        <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b6/%CE%9F_%CE%95%CF%80%CE%B9%CF%84%CE%AC%CF%86%CE%B9%CE%BF%CF%82_%CF%84%CE%BF%CF%85_%CE%A3%CE%B5%E1%BF%96%CE%BA%CE%B9%CE%BB%CE%BF%CF%85_-_Epitaph_of_Seikilos.ogg/%CE%9F_%CE%95%CF%80%CE%B9%CF%84%CE%AC%CF%86%CE%B9%CE%BF%CF%82_%CF%84%CE%BF%CF%85_%CE%A3%CE%B5%E1%BF%96%CE%BA%CE%B9%CE%BB%CE%BF%CF%85_-_Epitaph_of_Seikilos.ogg.mp3" type="audio/mp3"/>
        Your browser doesn't support audio player
      </audio>
      ```
      <audio controls="controls">
        <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b6/%CE%9F_%CE%95%CF%80%CE%B9%CF%84%CE%AC%CF%86%CE%B9%CE%BF%CF%82_%CF%84%CE%BF%CF%85_%CE%A3%CE%B5%E1%BF%96%CE%BA%CE%B9%CE%BB%CE%BF%CF%85_-_Epitaph_of_Seikilos.ogg/%CE%9F_%CE%95%CF%80%CE%B9%CF%84%CE%AC%CF%86%CE%B9%CE%BF%CF%82_%CF%84%CE%BF%CF%85_%CE%A3%CE%B5%E1%BF%96%CE%BA%CE%B9%CE%BB%CE%BF%CF%85_-_Epitaph_of_Seikilos.ogg.mp3" type="audio/mp3"/>
        Your browser doesn't support audio player
      </audio>
2. Best solution
   ```html
   <audio controls="controls" height="100" width="100">
       <source src="song.mp3" type="audio/mp3" />
       <source src="song.ogg" type="audio/ogg" />
       <embed height="100" width="100" src="song.mp3" />
    </audio>
   ```