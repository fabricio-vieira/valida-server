import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { Company } from "../ models/company"
import { CompaniesService } from "src/services/companies.service"
import { CreateCompanyInput } from "../dtos/company/create-company"

@Resolver(() => Company)
export class CompanyResolver {
    constructor(private companyService: CompaniesService) { }

    @Query(() => [Company])
    companies() {
        return this.companyService.listAllCompanies()
    }

    @Mutation(() => Company)
    createCompany(
        @Args('data') data: CreateCompanyInput
    ) {
        return this.companyService.createCompany(data)
    }
} 