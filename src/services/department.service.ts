import { Injectable } from "@nestjs/common";
import { PrismaService } from '../database/prisma/prisma.service'

interface CreateDepartmentParams {
    company_id: string
    description: string
}

@Injectable()
export class DepartmentService {
    constructor(private prismaService: PrismaService) { }

    listDepartments() {
        return this.prismaService.department.findMany()
    }

    getDepartmentById(id: string) {
        return this.prismaService.department.findUnique({
            where: {
                id,
            }
        })
    }

    async createDepartment({ company_id, description }: CreateDepartmentParams) {

        return this.prismaService.department.create({
            data: {
                company_id,
                description
            },
        })
    }
}