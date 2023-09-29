import { Body, Controller, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserBodyDto } from './dto/createUser.dto'
import { Public } from '../auth/public.decorator'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('/')
  async createUser(@Body() body: CreateUserBodyDto) {
    return this.usersService.createUser(body)
  }
}
