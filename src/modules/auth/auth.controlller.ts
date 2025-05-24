import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { authServices } from './auth.service';

const registerUser = catchAsync(async (req, res) => {
  const result = await authServices.registerUser(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUser(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export const authControllers = {
  registerUser,
  loginUser,
};
