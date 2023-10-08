import {configDotenv} from "dotenv";
configDotenv(".env")

import {HapiInit} from "../httpserver";
const Hapi = HapiInit()

const server = async () => {
  await  Hapi.init().then().catch(console.log)
    console.log(Hapi.serverClient )
}
server().then(r => console.log).catch(console.log)
process.on('unhandledRejection', (err) => {
    process.exit(1);
});