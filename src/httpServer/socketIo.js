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
        this.io = new SocketServer(server, options)
    }
}

const SocketInit = (server, options = {}) => {
    return SocketIoClass.getInstance(server, options)
}

export default SocketInit