import { PrismaClient } from "@prisma/client"

interface IEmployeeRequest {
    id: number;
    name: string;
    age: number;
    gender: string;
    address: string;
    role: string;
    salary: number;
    diploma: boolean;
}


class UpdateEmployeeService {

    async execute({ id, name, age, gender, address, role, salary, diploma }: IEmployeeRequest) {
        const prisma = new PrismaClient()

        const employee = await prisma.employee.update({
            where: { id: id },
            data: {
                name: name,
                age: age,
                gender: gender,
                address: address,
                role: role,
                salary: salary,
                diploma: diploma,
            },

        })

        return employee
    }
}

export { UpdateEmployeeService }