import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { TestsService } from './tests.service'
import { GetTestsQueryDto } from './dto/getTests.dto'
import { CreateTestDto } from './dto/createTest.dto'

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('/')
  async getTests(@Query() query: GetTestsQueryDto) {
    return { query }
  }

  @Get('/:testId')
  async getTest(@Param('testId') testId: string) {
    return { testId }
  }

  @Post('/')
  async createTest(@Body() body: CreateTestDto) {
    return { body }
  }
}
