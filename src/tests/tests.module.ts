import { Module } from '@nestjs/common'
import { TestsService } from './tests.service'
import { TestsController } from './tests.controller'
import { TestDBModule } from './schemas/test.schema'

@Module({
  imports: [TestDBModule],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
