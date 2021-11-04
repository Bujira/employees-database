import { Router } from "express"
import { CreateEmployeeController } from "./controllers/CreateEmployeeController"
import { ListEmployeesController } from "./controllers/ListEmployeesController"
import { UpdateEmployeeController } from "./controllers/UpdateEmployeeController"

const router = Router()

const createEmployeeController = new CreateEmployeeController()
const listEmployeesController = new ListEmployeesController()
const updateEmployeeController = new UpdateEmployeeController()

router.post("/employee", createEmployeeController.handle)

router.get("/list", listEmployeesController.handle)

router.put("/update", updateEmployeeController.handle)

export { router }