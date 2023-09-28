import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ required: true })
  email!: string

  @Prop({ required: true })
  hashedPassword!: string

  @Prop({ required: true })
  salt!: string

  @Prop({ required: true })
  nickname!: string
}

export const UserSchema = SchemaFactory.createForClass(User)
