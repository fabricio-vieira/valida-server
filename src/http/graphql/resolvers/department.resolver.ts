import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql"
import { DepartmentService } from 'src/services/department.service'
import { CompaniesService } from "src/services/companies.service"
import { Department } from '../ models/department'
import { CreateDepartmentInput } from "../dtos/department/create-department"
import { Company } from "../ models/company"

@Resolver(() => Department)
export class DepartmentResolver {
    constructor(
        private departmentService: DepartmentService,
        private companyService: CompaniesService
    ) { }

    @Query(() => [Department])
    departments() {
        return this.departmentService.listDepartments()
    }

    @ResolveField(() => Company)
    company(@Parent() department: Department) {
        return this.companyService.getCompanyById(department.company_id)
    }

    @Mutation(() => Department)
    createDepartment(
        @Args('data') data: CreateDepartmentInput
    ) {
        return this.departmentService.createDepartment(data)
    }

}