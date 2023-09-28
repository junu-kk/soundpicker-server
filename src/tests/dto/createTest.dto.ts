import { IsArray, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator'

export class CreateTestDto {
  @IsString()
  testCategoryId: string

  @IsString()
  title: string

  @IsString()
  description: string

  @IsArray()
  questions: Question[]
}

export class Question {
  @IsUrl()
  videoUrl: string

  @IsNumber()
  startSecond: number

  @IsString()
  @IsOptional()
  hint?: string

  @IsString()
  answer: string
}
