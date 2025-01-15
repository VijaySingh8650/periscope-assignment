import { ErrorRequestHandler, Request, Response } from "express";


export const InvalidAPI = (req:Request, res:Response) => {
    res.status(404).json({ error: "Invalid API Endpoint" });
}

export const ErrorHandler = (err: ErrorRequestHandler, req: Request, res: Response) => {
    res.status(500).json({ error: "Something went wrong" });
}