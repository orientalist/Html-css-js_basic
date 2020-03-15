# Canvas vs SVG
1. SVG
   1. In XML format
   2. All element of SVG can be manipulated by js
   3. All instance are object
2. Canvas
   1. Create by js manipulation
   2. Render pixel by pixel
   3. Once finish rendering,browser will quit control of it.
   4. If something change, whole canvas should re-render,include all pix even covered.
3. Canvas vs SVG
   1. Canvas
      1. Rely on image resolution
      2. Don't support event handler
      3. Week ability of document rendering
      4. Can save as png or ipg file
      5. Good for game which will frequently re-render
   2. SVG
      1. Don't rely on image resolution
      2. Support event handler
      3. Good for huge scale rendering(google map)
      4. Be slow when the complex is higher
      5. Bad for making game