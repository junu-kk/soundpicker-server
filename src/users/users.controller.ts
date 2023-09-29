import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { ParseObjectIdPipe } from '../common/pipes/parseObjectId.pipe'
import { CreateTokenDto } from './dto/createToken.dto'
import { CreateUserBodyDto } from './dto/createUser.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async createUser(@Body() body: CreateUserBodyDto) {
    return { body }
  }

  @Get('/:userId')
  async getUser(@Param('userId', ParseObjectIdPipe) userId: string) {
    return { userId }
  }

  @Post('/:userId/tokens')
  async createToken(
    @Param('userId', ParseObjectIdPipe) userId: string,
    @Body() body: CreateTokenDto,
  ) {
    return { userId, body }
  }
}
