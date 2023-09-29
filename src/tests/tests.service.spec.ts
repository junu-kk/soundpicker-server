import { Test, TestingModule } from '@nestjs/testing'
import { TestsService } from './tests.service'
import { getModelToken } from '@nestjs/mongoose'
import { Model } from 'mongoose'

describe('TestsService', () => {
  let service: TestsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TestsService,
        { provide: getModelToken(Test.name), useValue: Model<Test> },
      ],
    }).compile()

    service = module.get<TestsService>(TestsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
