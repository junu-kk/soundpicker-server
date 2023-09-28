import { IsNumber, IsOptional, IsString } from 'class-validator'

export class PagingDto {
  @IsOptional()
  @IsNumber()
  page: number

  @IsOptional()
  @IsNumber()
  size: number

  @IsOptional()
  @IsString()
  sort: string
}
