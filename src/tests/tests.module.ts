import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestSchema } from './test.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
})
export class TestsModule {}
