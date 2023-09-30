import _hapi_hapi from "@hapi/hapi";
import _qs from "qs";



const HapiInit =(routes) => {
    const port = process.env?.HTTP_PORT
    const host = process.env?.HTTP_HOST
    const server = _hapi_hapi.server({
        port: port?parseInt(port):3000,
        host: host?host:'localhost',
        query: {
            parser: (query) => _qs.parse(query)
        },
        routes:{
            payload:{
                allow:"application/json"
            }
        }
    });
    server.route(routes);
    return new Promise((resolve, reject) => {
         server.start().then(res => {
             console.log('Server running on %s', server.info.uri);
             resolve(server)
         }).catch(err=>{
             console.log('Server running failed %s', err.message);
             reject(err.message)
         });
    })
};
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

export default HapiInit
