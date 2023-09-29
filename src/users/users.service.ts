import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './schemas/user.schema'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserByNickname(nickname: string) {
    return this.userModel.findOne({ nickname }).lean()
  }
}
