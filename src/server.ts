import express from "express"   //importing the express web framework

const app = express()   //initializing the express web framework

import { router } from "./routes"

app.use(express.json())

app.use(router)

app.listen(3000, () => console.log("Server is running...")) //starting the server