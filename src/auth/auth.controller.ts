import { Body, Controller, Post } from '@nestjs/common'
import { Public } from './public.decorator'
import { LoginDto } from './dto/loginDto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/login')
  async createToken(@Body() body: LoginDto) {
    return this.authService.login(body)
  }
}
