import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Department } from "./department"

@ObjectType()
export class Company {

    @Field(() => ID)
    id: string

    @Field()
    razao: string

    @Field()
    cnpj: string

    @Field()
    is_active: Boolean

    @Field()
    is_excluded: Boolean

    // @Field(() => Department)
    // department: Department

}