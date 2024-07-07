import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql"
import { Company } from './company'
import { Department } from './department'


export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    TERMINAL = 'TERMINAL'
}

registerEnumType(UserRole, {
    name: 'UserRole',
    description: 'Describe roles for users'
})

@ObjectType()
export class User {

    @Field(() => ID)
    id: string

    @Field()
    company_id: string

    @Field()
    department_id: string

    @Field()
    name: string

    @Field(() => UserRole)
    role: UserRole

    @Field()
    code: number

    @Field({ nullable: true })
    email: string

    @Field({ nullable: true })
    password: string

    @Field()
    office: string

    @Field()
    is_active: Boolean

    @Field()
    is_excluded: Boolean

    @Field(() => Company)
    company: Company

    @Field(() => Department)
    department: Department

}


