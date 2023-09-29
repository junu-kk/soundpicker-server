import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import { User } from './schemas/user.schema'
import { Model } from 'mongoose'
import { getModelToken } from '@nestjs/mongoose'

describe('UsersService', () => {
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: Model<User>,
        },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
