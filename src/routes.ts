import { Router } from "express"
import { CreateEmployeeController } from "./controllers/CreateEmployeeController"
import { DeleteEmployeeController } from "./controllers/DeleteEmployeeController"
import { FilterEmployeesController } from "./controllers/FilterEmployeesController"
import { ListEmployeesController } from "./controllers/ListEmployeesController"
import { UpdateEmployeeController } from "./controllers/UpdateEmployeeController"

const router = Router()

const createEmployeeController = new CreateEmployeeController()
const listEmployeesController = new ListEmployeesController()
const updateEmployeeController = new UpdateEmployeeController()
const deleteEmployeeController = new DeleteEmployeeController()
const filterEmployeesController = new FilterEmployeesController()

router.post("/employee", createEmployeeController.handle)

router.get("/list", listEmployeesController.handle)
router.get("/filter", filterEmployeesController.handle)

router.put("/update", updateEmployeeController.handle)

router.delete("/delete", deleteEmployeeController.handle)

export { router }