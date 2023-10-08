export function httpserverConfig(){
    const Options = process.env?.HTTPSERVER
    if (!Options) throw new Error("HTTPSERVER 配置不存在");
    const httpserverOptions = JSON.parse(Options)
    return {
        host:httpserverOptions?.HOST,
        prot:httpserverOptions?.PORT
    }
}