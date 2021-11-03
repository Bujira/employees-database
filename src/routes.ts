import { Router } from "express"
import { CreateEmployeeController } from "./controllers/CreateEmployeeController"
import { ListEmployeesController } from "./controllers/ListEmployeesController"

const router = Router()

const createEmployeeController = new CreateEmployeeController()
const listEmployeesController = new ListEmployeesController()

router.post("/employee", createEmployeeController.handle)

router.get("/list", listEmployeesController.handle)

export { router }