import { PrismaClient } from "@prisma/client"

interface IDeleteRequest {
    id: number;
}

class DeleteEmployeeService {

    async execute({ id }: IDeleteRequest) {
        const prisma = new PrismaClient()

        const employee = await prisma.employee.delete({
            where: {
                id: id,
            },
        })

        return employee
    }
}

export { DeleteEmployeeService }