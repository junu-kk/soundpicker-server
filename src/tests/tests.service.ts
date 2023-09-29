import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Test } from './schemas/test.schema'
import { GetTestsQueryDto } from './dto/getTests.dto'
import { CreateTestDto } from './dto/createTest.dto'

@Injectable()
export class TestsService {
  private readonly logger = new Logger(TestsService.name)

  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  async getTests(dto: GetTestsQueryDto) {
    // not using sort option yet
    const { testCategoryId, userId, page, size } = dto
    const filter = {}
    if (testCategoryId) {
      filter['testCategoryId'] = testCategoryId
    }
    if (userId) {
      filter['userId'] = new Types.ObjectId(userId)
    }

    return this.testModel
      .find(filter)
      .skip((page - 1) * size)
      .limit(size)
      .lean()
  }

  async getTest(testId: string) {
    return this.testModel.findOne({ _id: new Types.ObjectId(testId) })
  }

  async createTest(dto: CreateTestDto) {
    // TODO: implement
    return this.testModel.create()
  }
}
