import AppError from '../error/AppError';
import { IUser } from './auth.interface';
import { User } from './auth.model';
import bcrypt from 'bcrypt';
const registerUser = async (payload: IUser) => {
  const isUserExist = await User.findOne({
    email: payload.email,
  });
  if (isUserExist) {
    throw new AppError(409, 'User already exists');
  }
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  payload.password = hashedPassword;
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({
    email: payload.email,
  });
  if (!user) {
    throw new AppError(401, 'User not found');
  }
  const isPasswordMatch = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordMatch) {
    throw new AppError(401, 'Incorrect password');
  }
  // const jwtPayload = {
  //   id: user._id,
  //   name: user.name,
  //   email: user.email,
  //   role: user.role,
  // };
  // const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
  //   expiresIn: '1d',
  // });
  return user;
};

export const authServices = {
  registerUser,
  loginUser,
};
