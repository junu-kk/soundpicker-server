import { forwardRef, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth.guard'

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }],
  exports: [AuthService],
})
export class AuthModule {}
