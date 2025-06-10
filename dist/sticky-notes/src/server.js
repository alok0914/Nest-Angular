"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqHandler = void 0;
const node_1 = require("@angular/ssr/node");
const express_1 = require("express");
const app = (0, express_1.default)();
const angularApp = new node_1.AngularNodeAppEngine();
app.use((req, res, next) => {
    angularApp
        .handle(req)
        .then((response) => response ? (0, node_1.writeResponseToNodeResponse)(response, res) : next())
        .catch(next);
});
exports.reqHandler = (0, node_1.createNodeRequestHandler)(app);
//# sourceMappingURL=server.js.map