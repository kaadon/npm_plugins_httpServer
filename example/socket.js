const {configDotenv} = require("dotenv");
configDotenv(".env")

const {HapiInit, SocketInit} = require("../httpserver");

const Hapi = HapiInit()

const server = async () => {
    await Hapi.init().then().catch(console.log)
    let socket = SocketInit(Hapi.serverClient.listener)

    setInterval(()=>{
        socket.toAll({emit:"sss",data:{addAll:"aaaa"}})
    },1000)
}
server().then(r => console.log).catch(console.log)
process.on('unhandledRejection', (err) => {
    process.exit(1);
});