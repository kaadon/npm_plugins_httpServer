<h1 align="center">
   <b>
        <a href="https://developer.kaadon.com"><img src="httpServer.logo.png"  alt="developer.kaadon.com"/></a><br>
    </b>
</h1>
<p align="center">httpServer client for the node.js</p>

### HTTPSERVER配置
> ###### json 配置
> ```json
>     {
>         "HTTPSERVER":{
>             "HOST":"127.0.0.1",
>             "PORT":"4501"
>         }
>     }
> ```
>
> ###### dotenv 配置
> ```dotenv
> #dotenv
> HTTPSERVER='{"HOST":"127.0.0.1","PORT":"4501"}'
> ```
>
> 
### example
> ###### HAPI
> ```javascript
> import {HapiInit} from "../httpserver";
> const Hapi = HapiInit()
> const server = async () => {
> await  Hapi.init().then().catch(console.log)
> console.log(Hapi.serverClient )
> }
> server().then(r => console.log).catch(console.log)
> process.on('unhandledRejection', (err) => {
> process.exit(1);
> });
> ```
> 
> ###### SOCKET
> ```javascript
> import {HapiInit,SocketInit} from "../httpserver";
> const Hapi = HapiInit()
> const server = async () => {
> await  Hapi.init().then().catch(console.log)
> SocketInit(Hapi.serverClient.listener)
> }
> server().then(r => console.log).catch(console.log)
> process.on('unhandledRejection', (err) => {
> process.exit(1);
> });
> ```