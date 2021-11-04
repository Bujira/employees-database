import { Router } from "express"
import { CreateEmployeeController } from "./controllers/CreateEmployeeController"
import { DeleteEmployeeController } from "./controllers/DeleteEmployeeController"
import { ListEmployeesController } from "./controllers/ListEmployeesController"
import { UpdateEmployeeController } from "./controllers/UpdateEmployeeController"

const router = Router()

const createEmployeeController = new CreateEmployeeController()
const listEmployeesController = new ListEmployeesController()
const updateEmployeeController = new UpdateEmployeeController()
const deleteEmployeeController = new DeleteEmployeeController()

router.post("/employee", createEmployeeController.handle)

router.get("/list", listEmployeesController.handle)

router.put("/update", updateEmployeeController.handle)

router.delete("/delete", deleteEmployeeController.handle)

export { router }