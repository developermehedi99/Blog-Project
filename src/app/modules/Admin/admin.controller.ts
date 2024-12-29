import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../utils/catchAsync';
import { adminService } from './admin.services';
import sendResponse from '../../utils/sentResponse';

const blockUser = catchAsync(async (req, res) => {
  const id = req?.user?.userId;
  const { userId } = req.params;

  await adminService.blockUserFormAdmin(id, userId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User blocked successfully',
  });
});
const deletedBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.user as JwtPayload;
  await adminService.deleteBlog(id, userId, role);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog deleted successfully',
  });
});
export const adminControllers = {
  blockUser,
  deletedBlog,
};
