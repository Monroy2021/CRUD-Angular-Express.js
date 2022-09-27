import express, { Application, Request, Response } from 'express';


class Server {

    private app: Application;
    private port: string;


    constructor() {
        this.app = express();
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
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Api Working'
            });
        });
    }
}
exports.default = Server;
