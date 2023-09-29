import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from './auth.service'
import { UsersService } from '../users/users.service'
import { getModelToken } from '@nestjs/mongoose'
import { User } from '../users/schemas/user.schema'
import { Model } from 'mongoose'
import { JwtService } from '@nestjs/jwt'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        JwtService,
        {
          provide: getModelToken(User.name),
          useValue: Model<User>,
        },
      ],
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
