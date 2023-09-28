import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator'

enum UserInfo {
  Email = 'email',
  Password = 'password',
  Nickname = 'nickname',
}

export class CreateUserQueryDto {
  @IsEnum(UserInfo)
  @IsOptional()
  verifyOnly?: UserInfo
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
