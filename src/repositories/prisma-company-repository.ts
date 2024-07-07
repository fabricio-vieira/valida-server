// import { Prisma } from '@prisma/client'
// import { PrismaService } from 'src/database/prisma/prisma.service'

// export class PrismaCompanyRepository {
//     constructor(
//         private prismaService: PrismaService
//     ) { }
//     async create(data: Prisma.CompanyCreateInput) {
//         await this.prismaService.company.create({
//             data: {
//                 razao: data.razao,
//                 cnpj: data.cnpj
//             }
//         })
//     }
// }