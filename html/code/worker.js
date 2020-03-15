let c=0;

setInterval(()=>{
    c+=1;
    postMessage(c);
},500);