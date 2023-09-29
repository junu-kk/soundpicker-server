import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { TokenPayloadDto } from '../../auth/dto/tokenPayload.dto'

export const ReqUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const { user } = ctx.switchToHttp().getRequest()
    return user as TokenPayloadDto
  },
)
