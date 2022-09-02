let http = require("http");
let url = require("url");

function start(route) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        // 响应网页文本
        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write("Hello World");
        // response.end();

        // 响应JSON字符串
        response.writeHead(200, {"Content-Type": "text/json"});
        response.end(JSON.stringify({name: "zhangsan", age: 18}));
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
