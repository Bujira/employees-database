import { PrismaClient } from "@prisma/client"


class FilterEmployeesService {

    async execute() {
        const prisma = new PrismaClient()

        const employee = await prisma.employee.findMany({
            where: {
                role: {
                    search: "Front | Back"
                }
            },
            orderBy: {
                id: 'asc',
            },
        })


        return employee
    }
}

export { FilterEmployeesService }