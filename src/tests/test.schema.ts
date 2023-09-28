import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'

@Schema({ _id: false })
class Question {
  @Prop({ required: true })
  videoUrl!: string

  @Prop({ required: true })
  startSecond!: number

  @Prop()
  hint?: string

  @Prop({ required: true })
  answer!: string
}

const QuestionSchema = SchemaFactory.createForClass(Question)

@Schema()
export class Test {
  @Prop({ required: true })
  testCategoryId!: Types.ObjectId

  @Prop({ required: true })
  userId!: Types.ObjectId

  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  description!: string

  @Prop({ required: true })
  questionCount!: number

  @Prop({ default: 0 })
  visitCount!: number

  @Prop({ type: [QuestionSchema], required: true })
  questions!: Question[]
}

export type TestDocument = HydratedDocument<Test>
export const TestSchema = SchemaFactory.createForClass(Test)
