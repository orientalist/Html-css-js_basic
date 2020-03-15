# Local storage
1. From html5
2. Better than cookie
3. Saving huge quantity without affecting web performance
4. Bigger than cookie(5mb) and no signal will be sent to server
5. Saving in origin(client).All page can access the data in same origin.

## Storage container
1. `window.localStorage`-no expire date data
2. `window.sessionStorage`-data will live in current session(destroy when the tab/browser is close)
3. Can only save string as value
4. To check if the local storage is usable:
   ```js
   if(typeof Storage!=='undefined'){
       //use local storage
   }
   else{
       //local storage is forbidden
   }
   ```
5. Usage of `localStorage` and `sessionStorage`
   1. `setItem(key,value)`
   ```js
   localStorage.setItem('key','value');
   ```
   1. `getItem(key)`
   ```js
   localStorage.getItem('key');
   ```
   1. `removeItem(key)`
   ```js
   localStorage.removeItem('key');
   ```