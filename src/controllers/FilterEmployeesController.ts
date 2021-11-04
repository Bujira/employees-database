import { Request, Response } from "express"
import { FilterEmployeesService } from "../services/FilterEmployeesService"


class FilterEmployeesController {

    async handle(request: Request, response: Response) {

        const filterEmployeesService = new FilterEmployeesService()

        const employee = await filterEmployeesService.execute()

        return response.json(employee)
    }
}

export { FilterEmployeesController }