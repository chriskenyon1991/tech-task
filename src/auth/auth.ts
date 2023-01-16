import { Request, Response } from "express";

export const auth = (req: Request, res: Response) => {
    if (req.header('Authorization') !== 'mysecrettoken') {
        res.send(403).send('Forbidden')
     }
}