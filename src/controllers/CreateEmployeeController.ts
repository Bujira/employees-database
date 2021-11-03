import { Request, Response } from "express"
import { CreateEmployeeService } from "../services/CreateEmployeeService"



class CreateEmployeeController {

    async handle(request: Request, response: Response) {
        const { name, age, gender, address, role, salary, diploma } = request.body

        const createEmployeeService = new CreateEmployeeService()

        const employee = await createEmployeeService.execute({
            name, age, gender, address, role, salary, diploma
        })
    }
}

export { CreateEmployeeController }