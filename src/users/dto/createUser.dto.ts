import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator'

export class CreateUserQueryDto {
  @IsBoolean()
  @IsOptional()
  verifyEmailOnly?: boolean

  @IsBoolean()
  @IsOptional()
  verifyNicknameOnly?: boolean

  @IsBoolean()
  @IsOptional()
  verifyPasswordOnly?: boolean
}

export class CreateUserBodyDto {
  @IsEmail()
  email: string

  @IsString()
  nickname: string

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string
}
