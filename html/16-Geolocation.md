# Geolocation

## In html5 you can use js to get location of user if the browser is permitted

```js
function getLocation(){
    //check if browser is permitted to get geolocation
    if (navigator.geolocation){
        //by using .getCurrentPosition ,pass call back to get position instance
        //second parameter of getCurrentPosition can handle error
        navigator.geolocation.getCurrentPosition((position)=>{
            return {
                latitude:position.coords.latitude,
                longtitude:position.coords.longtitude
            };
        },
        (error)=>{
            const x=document.getElementById('error');
            switch(error.code){
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation.";
                    break;
                    case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Location information is unavailable.";break;
                    case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out.";
                    break;
                    case error.UNKNOWN_ERROR:
                    x.innerHTML = "An unknown error occurred.";
                    break;
                }
            }
        }));
    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
}
```

## Show position in map
1. Create url to google map contain altitude and longtitude got by js
   ```js
   function showPosition(position)
   {
       var latlon=position.coords.latitude+","+position.coords.longitude;
       var img_url="http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
       
       document.getElementById("mapholder").innerHTML="<img src='"+img_url+"' />";
    }
   ```

## Keeping get position of user
1. By using `navigator.geolocation.watchPosition()`
   ```js
   //The callback will be triggerd when location change
   navigator.geolocation.watchPosition(showPosition);
   ```