import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { TokenPayloadDto } from './dto/tokenPayload.dto'
import { LoginDto } from './dto/loginDto'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const { nickname, password } = dto
    const user = await this.usersService.findUserByNickname(nickname)
    if (user?.hashedPassword !== password) {
      // TODO: encrypt password using crypto
      throw new UnauthorizedException('Wrong Password')
    }
    const payload = new TokenPayloadDto({ _id: user._id, nickname })
    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
