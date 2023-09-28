import {
  Injectable,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common'
import { isObjectIdOrHexString, Types } from 'mongoose'

@Injectable()
export class ParseObjectIdPipe implements PipeTransform {
  transform(oid: string) {
    if (!isObjectIdOrHexString(oid)) {
      throw new UnprocessableEntityException(
        `${oid} is not a valid MongoDB ObjectId`,
      )
    }

    return new Types.ObjectId(oid)
  }
}
