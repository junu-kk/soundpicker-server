import { Test, TestingModule } from '@nestjs/testing'
import { TestsController } from './tests.controller'
import { TestsService } from './tests.service'
import { getModelToken } from '@nestjs/mongoose'
import { Model } from 'mongoose'

describe('TestsController', () => {
  let controller: TestsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestsController],
      providers: [
        TestsService,
        {
          provide: getModelToken(Test.name),
          useValue: Model<Test>,
        },
      ],
    }).compile()

    controller = module.get<TestsController>(TestsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
