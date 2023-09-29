import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(nickname: string, password: string) {
    const user = await this.usersService.findUserByNickname(nickname)
    if (user?.hashedPassword !== password) {
      // TODO: encrypt password using crypto
      throw new UnauthorizedException('Wrong Password')
    }
    const payload = { userId: user._id, nickname }
    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
