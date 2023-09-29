import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { UserDBModule } from './schemas/user.schema'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [UserDBModule, AuthModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
