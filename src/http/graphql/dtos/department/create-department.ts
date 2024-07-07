import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateDepartmentInput {

    @Field()
    company_id: string

    @Field()
    description: string

}