import {Server as SocketServer} from "socket.io";

class SocketIoClass {
    io
    static instance

    static getInstance(server, options = {}) {
        if (!SocketIoClass.instance) {
            SocketIoClass.instance = new SocketIoClass(server, options);
        }
        return SocketIoClass.instance;
    }

    constructor(server, options) {
        if (JSON.stringify(options) === "{}") options = {
            pingInterval: 5000,
            withCredentials: true,
            cors: {
                origin: "*"
            }
        };
        this.io = new SocketServer(server, options)
    }


}

export default SocketIoClass.getInstance