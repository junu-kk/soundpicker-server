import { IsOptional } from 'class-validator'
import { PagingDto } from '../../common/dto/paging.dto'

export class GetTestsQueryDto extends PagingDto {
  // TODO: add oid validation
  @IsOptional()
  testCategoryId?: string

  @IsOptional()
  userId?: string
}
