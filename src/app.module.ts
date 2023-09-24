import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { UsersService } from './users/users.service'
import { TestsService } from './tests/tests.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URI)], // import ConfigModule first to use dotenv
  controllers: [AppController],
  providers: [AppService, UsersService, TestsService],
})
export class AppModule {}
