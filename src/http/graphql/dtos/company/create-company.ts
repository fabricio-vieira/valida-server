import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCompanyInput {

    @Field()
    razao: string

    @Field()
    cnpj: string
}