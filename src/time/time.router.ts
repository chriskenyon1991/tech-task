import { Request, Response } from "express";
import { Time } from "./time.model";

export const getTime = (req: Request, res: Response) => {
    console.log('in get')
    console.log(new Time())
    res.status(200).send(new Time());
}