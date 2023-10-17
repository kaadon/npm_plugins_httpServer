import {Server as SocketServer} from "socket.io";

class SocketIoClass {
    socketClient
    static instance

    members = {}

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
        this.socketClient = new SocketServer(server, options)
    }

    addMember(id, socket) {
        this.members[id] = socket
    }

    delMember(id) {
        if (this.members[id]) delete this.members[id]
    }

    async toMember(id, data) {
        try {
            //逻辑代码
            if (this.members[id]) await this.members[id].emit((data?.emit) ? data.emit : "toMember", (data?.data) ? data.data : {});
            return Promise.resolve(true)
        } catch (e) {
            return Promise.reject(e)
        }
    }


    async toAll(data) {
        try {
            await this.socketClient.emit((data?.emit) ? data.emit : "toAll", (data?.data) ? data.data : {})
            //逻辑代码
            return Promise.resolve(true)
        } catch (e) {
            return Promise.reject(e)
        }
    }
}

export default SocketIoClass.getInstance