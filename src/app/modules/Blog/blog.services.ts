import { TBlog } from './blog.interface';
import AppError from '../../errors/AppError';
import User from '../Auth/auth.model';
import { Blog } from './blog.model';
import QueryBuilder from '../../builder/queryBuilders';

const createBlogIntoDB = async (payload: TBlog) => {
  // Check if user already exists in the database
  const user = await User.isUserExistById(payload?.author.toString());
  if (!user || user.isBlocked) {
    throw new AppError(404, 'Invalid user. You can not create a blog post');
  }

  // create new blog post
  const result = await Blog.create(payload);
  if (!result) {
    throw new AppError(500, 'Failed to create blog post');
  }
  // new post created blog get for user details show
  const blogDetails = await Blog.findById(result._id).populate('author');
  return blogDetails;
};

const findAllBlogIntoDB = async (query: Record<string, unknown>) => {
  const searchableFields = ['title', 'content'];

  const blogs = new QueryBuilder(Blog.find().populate('author'), query)
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .select();

  const result = await blogs.modelQuery;
  return result;
};

const updatedBlogIntoDB = async (
  id: string,
  userId: string,
  payload: Partial<TBlog>,
) => {
  // Check if user already exists in the database

  const user = await User.isUserExistById(userId);
  const isBlogExist = await Blog.findById(id);

  if (!result) {
    throw new AppError(500, 'Failed to update blog post');
  }
  return result;
};

const DeletedBlogIntoDB = async (id: string, userId: string) => {
  // this blog exists or not
  const isBlogExist = await Blog.findById(id);
  const user = await User.isUserExistById(userId);

  if (!isBlogExist) {
    throw new AppError(404, 'This blog post not exist');
  }

  if (!user || user.isBlocked) {
    throw new AppError(404, 'Invalid user. You can not update this blog');
  }

  if (isBlogExist.author.toString() !== userId) {
    throw new AppError(403, 'You can not delete this blog');
  }
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const blogServices = {
  createBlogIntoDB,
  updatedBlogIntoDB,
  DeletedBlogIntoDB,
  findAllBlogIntoDB,
};
