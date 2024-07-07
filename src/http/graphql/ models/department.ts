import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Company } from "./company"

@ObjectType()
export class Department {

    @Field(() => ID)
    id: string

    @Field()
    company_id: string

    @Field()
    description: string

    @Field(() => Company)
    company: Company

}