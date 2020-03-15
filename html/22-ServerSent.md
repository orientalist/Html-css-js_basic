# Server sent message
1. One way messaging by js
2. Get messages when server sending message,don't need to periodly request
3. Full code
   1. js file
   ```js
   let source=undefined;
   if(typeof EventSource !=='undefined'){
       if(source===undefined){
           //create EventSource instance
           source=new EventSource('serverMessage.asp');
       }
       //set function to listen server sending message
       source.onmessage=function(e){
           let message=e.data;
       };

       //handle error
       source.onerror=function(err){
           switch(err.target.readyState){
               case EventSource.CONNECTING:
                   //means re-connecting
                   break;
                case EventSource.CLOSED:
                   //means closed
                   break;
           };
       };

       //handle open/close...
       source.onopen=function(e){
           switch(e.target.readyState){
               case SourceEvent.CONNECTING:
                   //means connecting
                   break;
                case SourceEvent.OPEN:
                   //means opened
                   break;
                case SourceEvent.CLOSED:
                   //means closed
                   break;
                default :
                    //means unknown
                    break;
           }
       };

       //close connecting
       source.close();
   }
   else{
       //browser does't support event source
   }
   ```
   2. Server side .asp file
   ```csharp
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    namespace ServerSendEvents
    {
        /// <summary>
        /// ServerSide 的摘要描述
        /// </summary>
        public class ServerSide : IHttpHandler
        {

            public void ProcessRequest(HttpContext context)
            {
                //must set content type to text/event-stream
                context.Response.ContentType = "text/event-stream";
                //set response period time to 1000ms
                context.Response.Write(string.Format("retry:{0}\n", "1000"));
                //set response message
                context.Response.Write(string.Format("data:{0}\n", DateTime.Now.ToString()));
            }

            public bool IsReusable
            {
                get
                {
                    return false;
                }
            }
        }
    }
   ```