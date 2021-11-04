import { PrismaClient } from "@prisma/client"


class ListEmployeesService {

    async execute() {
        const prisma = new PrismaClient()

        const employee = await prisma.employee.findMany({
            orderBy: {
                id: 'asc',
            },
        })

        return employee
    }
}

export { ListEmployeesService }