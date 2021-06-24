import "reflect-metadata"
<<<<<<< HEAD
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"

import { router } from "./routes"
=======
import "express-async-error"
import express from "express"

>>>>>>> 0546a5b1931039f44cb3cb3cae6d14810c6df5f9
import "./database"

const app = express()
app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        error: "Internal Server Error"
    })
})

app.listen(3000, () => console.log ("\n\n-------------------- \nServer na porta 3000"))