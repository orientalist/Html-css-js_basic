# Application Cache
1. From HTML5
2. To cache assigned file to save in client side
3. Client can access cached data even offline
4. Can save resource of server
5. Faster for page(will not request cached data)

## How to use
1. Assign manifest in `<html>`
   ```html
   <html manifest='demo.appcache'></html>
   ```
2. Write `demo.appcache` file in server
   1. CACHE MANIFEST-Assign data to cache
   2. NETWORK-Data do not cache
   3. FALLBACK-File to load when access is denied
   ```appcache
   CACHE MANIFEST
    # 2020-03-14 v1.0.0
    /theme.css
    /logo.gif
    /main.js

    NETWORK
    login.asp

    FALLBACK
    /html/ /offline.html
   ```