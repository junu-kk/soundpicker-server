import { PartialType } from '@nestjs/swagger'
import { CreateTestDto } from './createTest.dto'

export class UpdateTestDto extends PartialType(CreateTestDto) {}
