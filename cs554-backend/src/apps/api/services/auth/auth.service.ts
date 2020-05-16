import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
@Injectable()
export class AuthService {
  verifyUser(token: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(token);
  }
}
