import { Request, Response } from "express"
import { ListEmployeesService } from "../services/ListEmployeesService"



class ListEmployeesController {

    async handle(request: Request, response: Response) {

        const listEmployeesService = new ListEmployeesService()

        const employee = await listEmployeesService.execute()

        return response.json(employee)
    }
}

export { ListEmployeesController }