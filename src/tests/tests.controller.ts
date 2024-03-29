import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { TestsService } from './tests.service'
import { GetTestsQueryDto } from './dto/getTests.dto'
import { CreateTestDto } from './dto/createTest.dto'
import { ReqUser } from '../common/decorators/reqUser.decorator'
import { TokenPayloadDto } from '../auth/dto/tokenPayload.dto'

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('/')
  async getTests(@Query() query: GetTestsQueryDto) {
    return this.testsService.getTests(query)
  }

  @Get('/:testId')
  async getTest(@Param('testId') testId: string) {
    return this.testsService.getTest(testId)
  }

  @Post('/')
  async createTest(
    @ReqUser() user: TokenPayloadDto,
    @Body() body: CreateTestDto,
  ) {
    return this.testsService.createTest(user, body)
  }
}
