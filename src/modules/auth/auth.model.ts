import { model, Schema } from 'mongoose';
import { IUser } from './auth.interface';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

export const User = model<IUser>('User', userSchema);
