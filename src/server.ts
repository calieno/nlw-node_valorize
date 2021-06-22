import { router } from "./routes"
import "reflect-metadata"

import express, { request, response } from "express"

import "./database"

const app = express()
app.use(express.json())
app.use(router)

app.listen(3000, () => console.log ("\n\n-------------------- \nServer na porta 3000"))