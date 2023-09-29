import { IsString } from 'class-validator'

export class CreateTokenDto {
  @IsString()
  nickname: string

  @IsString()
  password: string
}
