import { Module } from '@nestjs/common'
import { HttpModule } from './http/http.module'
import { DatabaseModule } from './database/database.module'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
// import { AuthModule } from './auth/auth.module'


@Module({
  imports: [HttpModule, DatabaseModule, ConfigModule.forRoot({
    validate: (env) => envSchema.parse(env),
    isGlobal: true
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
