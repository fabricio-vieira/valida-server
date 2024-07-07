import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface CreateCompanyParams {
    razao: string
    cnpj: string
}

@Injectable()
export class CompaniesService {
    constructor(private prisma: PrismaService) { }

    listAllCompanies() {
        return this.prisma.company.findMany()
    }

    getCompanyById(id: string) {
        return this.prisma.company.findUnique({
            where: {
                id,
            }
        })
    }

    async createCompany({ razao, cnpj }: CreateCompanyParams) {

        return this.prisma.company.create({
            data: {
                razao,
                cnpj
            },
        })
    }
}
