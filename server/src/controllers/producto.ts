import { Request, Response } from 'express';

const getProducts = (req: Request, res: Response) => {

    res.json({
        msg: 'get products'
    })

}