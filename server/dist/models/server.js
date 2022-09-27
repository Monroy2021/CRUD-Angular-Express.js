"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.router();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion en el puerto ${this.port}`);
        });
    }
    router() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'Api Working'
            });
        });
    }
}
exports.default = Server;
