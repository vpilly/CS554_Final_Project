import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
});

export interface User extends Document {
  readonly name: string;
}
