import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/database/prisma/prisma.service"
import { UserRole } from '../http/graphql/ models/user'
import { generateHash } from '../utils/generate-hash'

interface CreateUserParams {
    company_id: string
    department_id: string
    name: string
    role: UserRole
    code: number
    password?: string
    email?: string
    office: string

}

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    listAllUsers() {
        return this.prisma.user.findMany()
    }

    getUserById(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id,
            }
        })
    }

    async createUser({ company_id, department_id, name, role, code, password, email, office }: CreateUserParams) {
        const prismaRole = role as 'ADMIN' | 'USER' | 'TERMINAL'

        if (password) {
            const hashed_password = await generateHash(password)

            return this.prisma.user.create({
                data: {
                    company_id,
                    department_id,
                    name,
                    role: prismaRole,
                    code,
                    password: hashed_password,
                    email,
                    office
                },
            })
        }
        else {

            return this.prisma.user.create({
                data: {
                    company_id,
                    department_id,
                    name,
                    role: prismaRole,
                    code,
                    password,
                    email,
                    office
                },
            })
        }
    }
}
