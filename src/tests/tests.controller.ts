import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { TestsService } from './tests.service'
import { GetTestsQueryDto } from './dto/getTests.dto'
import { ParseObjectIdPipe } from '../common/pipes/parseObjectId.pipe'
import { UpdateTestDto } from './dto/updateTest.dto'
import { CreateTestDto } from './dto/createTest.dto'

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('/')
  async getTests(@Query() query: GetTestsQueryDto) {
    return { query }
  }

  @Get('/:testId')
  async getTest(@Param('testId', ParseObjectIdPipe) testId: string) {
    return { testId }
  }

  @Post('/')
  async createTest(@Body() body: CreateTestDto) {
    return { body }
  }

  @Patch('/:testId')
  async updateTest(
    @Param('testId', ParseObjectIdPipe) testId: string,
    @Body() body: UpdateTestDto,
  ) {
    return { testId, body }
  }
}
