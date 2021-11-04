import { Request, Response } from "express"
import { UpdateEmployeeService } from "../services/UpdateEmployeeService"


class UpdateEmployeeController {

    async handle(request: Request, response: Response) {
        const { id, name, age, gender, address, role, salary, diploma } = request.body

        const updateEmployeeService = new UpdateEmployeeService()

        const employee = await updateEmployeeService.execute({
            id, name, age, gender, address, role, salary, diploma
        })

        return response.json(employee)
    }
}

export { UpdateEmployeeController }