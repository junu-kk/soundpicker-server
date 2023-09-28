import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class TestsService {
  private readonly logger = new Logger(TestsService.name)
}
