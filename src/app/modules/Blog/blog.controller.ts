import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sentResponse';
import { blogServices } from './blog.services';

const createdBlog = catchAsync(async (req, res) => {
  const result = await blogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Blog created successfully',
    data: result,
  });
});

const findAllBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.findAllBlogIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

const updatedBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.updatedBlogIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Your blog updated successfully',
    data: result,
  });
});
const deletedBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  await blogServices.DeletedBlogIntoDB(id);

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
