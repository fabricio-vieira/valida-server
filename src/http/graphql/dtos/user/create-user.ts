import { Field, InputType } from "@nestjs/graphql";
import { UserRole } from '../../ models/user'
import { nullable } from "zod";

@InputType()
export class CreateUserInput {

    @Field()
    company_id: string

    @Field()
    department_id: string

    @Field()
    name: string

    @Field(() => UserRole)
    role: UserRole

    @Field({ nullable: true })
    email: string

    @Field()
    code: number

    @Field({ nullable: true })
    password: string

    @Field()
    office: string

}