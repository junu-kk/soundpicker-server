import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'
import { TestModule } from './test/test.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    TestModule,
  ], // import ConfigModule first to use dotenv
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
