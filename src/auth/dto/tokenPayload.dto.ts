import { Types } from 'mongoose'

export class TokenPayloadDto {
  constructor(o: TokenPayloadDto) {
    Object.assign(this, o)
  }
  _id: Types.ObjectId
  nickname: string
}
