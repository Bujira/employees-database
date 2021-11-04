import { Request, Response } from "express"
import { DeleteEmployeeService } from "../services/DeleteEmployeeService"


class DeleteEmployeeController {

    async handle(request: Request, response: Response) {
        const { id } = request.body

        const deleteEmployeeService = new DeleteEmployeeService()

        const employee = await deleteEmployeeService.execute({ id })

        return response.json(employee)
    }
}

export { DeleteEmployeeController }