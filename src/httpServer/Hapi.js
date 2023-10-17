import _hapi_hapi from "@hapi/hapi";
import _qs from "qs";
import {httpserverConfig} from "../config/hapiConfig";

class HapiInitClass {
    serverClient

    static instance

    static getInstance() {
        if (!HapiInitClass.instance) {
            HapiInitClass.instance = new HapiInitClass();
        }
        return HapiInitClass.instance;
    }

    constructor(routes = {}) {
        let http_server_config = httpserverConfig()
        this.serverClient = _hapi_hapi.server({
            port: http_server_config.prot ? parseInt(http_server_config.prot) : 3000,
            host: http_server_config.host ? http_server_config.host : 'localhost',
            query: {
                parser: (query) => _qs.parse(query)
            },
            routes: {
                payload: {
                    allow: "application/json"
                }
            }
        })
        if (routes !== {}) this.setRoute(routes);
    }

    setRoute(routes){
        if (JSON.stringify(routes) !== "{}") this.serverClient.route(routes);
        return this
    }

    init(){
        let that = this
        return new Promise((resolve, reject) => {
            that.serverClient.start().then(res => {
                console.log('Server running on %s', that.serverClient.info.uri);
                resolve(that.serverClient)
            }).catch(err => {
                reject(err)
            });
        })
    }
}



export default HapiInitClass.getInstance
