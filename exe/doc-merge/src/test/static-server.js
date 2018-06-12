"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const http = require("http");
function startApp(app) {
    return new Promise((resolve, reject) => {
        const server = http.createServer(app);
        server.listen(0, () => {
            resolve(server);
        });
    });
}
async function createStaticServer() {
    const app = express();
    const staticDir = path.join(__dirname, '..', '..', 'test-files');
    app.use(express.static(staticDir));
    const server = await startApp(app);
    return server;
}
exports.createStaticServer = createStaticServer;
//# sourceMappingURL=static-server.js.map