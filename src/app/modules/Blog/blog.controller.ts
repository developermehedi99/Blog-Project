import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sentResponse';
import { blogServices } from './blog.services';

const createdBlog = catchAsync(async (req, res) => {
  const author = req?.user?.userId;
  const data = req.body;

  const result = await blogServices.createBlogIntoDB({ ...data, author });

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Blog created successfully',
    data: result,
  });
});

const findAllBlogs = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await blogServices.findAllBlogIntoDB(query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

const updatedBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req?.user?.userId;
  const result = await blogServices.updatedBlogIntoDB(id, userId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Your blog updated successfully',
    data: result,
  });
});
const deletedBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user as JwtPayload;
  await blogServices.DeletedBlogIntoDB(id, userId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog deleted successful',
  });
});

export const blogsControllers = {
  createdBlog,
  updatedBlog,
  deletedBlog,
  findAllBlogs,
};
