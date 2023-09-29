import { ConflictException, Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './schemas/user.schema'
import { Model } from 'mongoose'
import { CreateUserBodyDto } from './dto/createUser.dto'

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserByNickname(nickname: string) {
    return this.userModel.findOne({ nickname }).lean()
  }

  async createUser(dto: CreateUserBodyDto) {
    const { nickname, password } = dto
    if (await this.findUserByNickname(nickname)) {
      throw new ConflictException(`nickname ${nickname} already exists`)
    }

    // TODO: encrypt password using crypto
    const { _id } = await this.userModel.create({
      nickname,
      hashedPassword: password,
    })

    return { _id, nickname }
  }
}
