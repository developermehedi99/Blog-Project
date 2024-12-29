import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sentResponse';
import { authServices } from './auth.services';

const createRegisterUser = catchAsync(async (req, res) => {
  const result = await authServices.registerUserInDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'User registered successfully',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUserInDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Login successful',
    data: result,
  });
});

export const userControllers = {
  createRegisterUser,
  loginUser,
};
