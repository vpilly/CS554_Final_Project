import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class FirebaseGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext();
    const authorization = req.headers.authorization;
    if (!authorization) {
      return false;
    }
    await this.authService.verifyUser(authorization);
    return true;
  }
}
