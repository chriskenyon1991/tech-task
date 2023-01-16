import { Request, Response } from "express";
import { Time } from "./time.model";

export const getTime = (req: Request, res: Response) => {
    res.status(200).send(new Time());
}