import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
@Injectable()
export class AuthService {
  constructor() {
    admin.initializeApp();
  }
  verifyUser(token: string): Promise<admin.auth.DecodedIdToken> {
    return admin.auth().verifyIdToken(token);
  }
  getUserById(id: string) {
    return admin.auth().getUser(id);
  }
}
