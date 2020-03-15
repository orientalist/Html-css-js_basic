# WebWorker
1. The js work behind
2. Will not affect web performance

## How to use
1. Check whether browser support it
   ```js
   if(typeof Worker!=='undefined'){
       //do worker
   }
   else{
       //not support for web worker
   }
   ```
2. Use `postMessage(value)` to return data to html
   ```js
   if(typeof Worker!=='undefined'){
       postMessage('Web worker is working');
   }
   else{
       //not support for web worker
   }
   ```
3. Create worker js data
4. Using `.terminate()` to end worker
5. Full code
   ```js
   let worker=undefined;
   //check if browser support worker
   if(typeof Worker!=='undefined'){
       if(typeof worker === 'undefined'){
           //create worker by using the js
           worker=new Worker('worker.js');
           //set listener by onmessage for the worker's postMessate()
           worker.onmessage=function(e){
               console.log(e.data);
            };

           setTimeout(()=>{
               worker.terminate();
           },10000);
       }
   }
   else{
       alert('Not supporting');
   }
   ```
1. Notes
   1. The worker is outside js so it can't access:
      1. window
      2. document
      3. parent