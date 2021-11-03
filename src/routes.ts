import { Router } from "express"
import { CreateEmployeeController } from "./controllers/CreateEmployeeController"

const router = Router()

const createEmployeeController = new CreateEmployeeController()

router.post("/employee", createEmployeeController.handle)