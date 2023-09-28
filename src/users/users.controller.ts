import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { UsersService } from './users.service'
import { ParseObjectIdPipe } from '../common/pipes/parseObjectId.pipe'
import { CreateUserQueryDto } from './dto/createUser.dto'
import { CreateTokenDto } from './dto/createToken.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async createUser(
    @Query() query: CreateUserQueryDto,
    @Body() body: object, // validate CreateUserBodyDto manually
  ) {
    return { query, body }
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
