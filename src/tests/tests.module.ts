import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestSchema } from './schemas/test.schema'
import { TestsService } from './tests.service'
import { TestsController } from './tests.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
