import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql"
import { User } from "../ models/user"
import { UserService } from "src/services/user.service"
import { CompaniesService } from "src/services/companies.service"
import { DepartmentService } from "src/services/department.service"
import { CreateUserInput } from "../dtos/user/create-user"
import { Company } from "../ models/company"
import { Department } from '../ models/department'

@Resolver(() => User)
export class UserResolver {
    constructor(
        private userService: UserService,
        private departmentService: DepartmentService,
        private companyService: CompaniesService
    ) { }

    @Query(() => [User])
    users() {
        return this.userService.listAllUsers()
    }

    @ResolveField(() => Company)
    company(@Parent() user: User) {
        return this.companyService.getCompanyById(user.company_id)
    }

    @ResolveField(() => Department)
    department(@Parent() user: User) {
        return this.departmentService.getDepartmentById(user.department_id)
    }

    @Mutation(() => User)
    async createUser(@Args('data') data: CreateUserInput) {
        return this.userService.createUser(data)
    }
} 