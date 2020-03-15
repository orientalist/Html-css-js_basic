# Cache
1. To avoid from wasting resource
2. Theory
   1. If the request url didn't change,get data from local instead of sending request

## How to
1. Expires
   1. Add `Expires`with value to header of response,before expire time,it will not sending request
      ```shell
      Expires: Wed, 21 Oct 2017 07:28:00 GMT
      ```
2. `Cache-Control` and `max-age`
   1. Value of max-age means avoiding request before value

3. `Last-Modified` and `If-Modified-Since`
   1. Add to response to first request to resource with`Last-Modified`
   2. Means the last time of modified time of resource
   3. After exire time ,client side will request server with `If-Modified-Since` with value of `Last-Modifies`
   4. If server check the last modified time of resource changed,response new resource with new expire time and `Last-Modified`
   5. If no change,response `304`,client side will use cached data and refresh `Last-Modified`

4. `ETag` and `If-None-Match
   1. Theory is equal to uppon
   2. The response of first request to resource will be `ETag` representing resource

## `no-cache` and `no-store`
1. `no-store` means don't save any data in client
2. `no-cache` means once the cache data expire,request server whether data changed,if true,response new reource ,if false,response 304
   
## Only request when resource change
1. Set response with header
   1.  `Cache-Control:max-age=0` 
   2.  `Etag` value or `Last-Modified`
   3.  Every time client asking for the same resource,it will request with header with `If-Modified-Since` or `If-None-Match` to check whether the resource change
   4.  The method uppon is equal to `Cache-Control:no-cache`

## Requset resource only when resource change without asking server whether the data change
1. Setting the resource with long time `max-age` so client will not asking before expire
2. If the resource change,change the file name so client will request for it
3. The key point is that you should make sure the data contain name of resource will change once the name of resource change,so setting `Cache-control=no-cache` to it