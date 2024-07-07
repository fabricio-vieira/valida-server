import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'node:path'

import { DatabaseModule } from '../database/database.module'
import { CompanyResolver } from './graphql/resolvers/company.resolver'
import { CompaniesService } from 'src/services/companies.service'
import { UserResolver } from './graphql/resolvers/user.resolver'
import { UserService } from 'src/services/user.service'
import { DepartmentResolver } from './graphql/resolvers/department.resolver'
import { DepartmentService } from 'src/services/department.service'


// import { ApolloDriver } from '@nestjs/apollo'


@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
    ],
    providers: [
        // Resolvers
        CompanyResolver,
        UserResolver,
        DepartmentResolver,

        //Services
        CompaniesService,
        UserService,
        DepartmentService
    ]
})
export class HttpModule { }



// O Papel do ConfigModule é fazer com que o arquivo http leia o arquivo .env automaticamente
// E consiga acessar a variavel .process.env