import {configDotenv} from "dotenv";
configDotenv(".env")

import {HapiInit,SocketInit} from "../httpserver";
const Hapi = HapiInit()

const server = async () => {
    await  Hapi.init().then().catch(console.log)
     SocketInit(Hapi.serverClient.listener)
}
server().then(r => console.log).catch(console.log)
process.on('unhandledRejection', (err) => {
    process.exit(1);
});