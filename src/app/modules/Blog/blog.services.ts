import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const findAllBlogIntoDB = async () => {
  const result = await Blog.find();
  return result;
};

const updatedBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  // Check if user already exists in the database

  const blog = await Blog.findOne({ _id: id });
  if (!blog) {
    throw new Error('blog Not Found');
  }
  const filter = { _id: id };
  const result = await Blog.findOneAndUpdate(filter, payload, {
    new: true,
  });
  return result;
};

const DeletedBlogIntoDB = async (id: string) => {
  // this blog exists or not
  const blog = await Blog.findOne({ _id: id });
  if (!blog) {
    throw new Error('blog Not Found');
  }
  const filter = { _id: id };
  const result = await Blog.deleteOne(filter);
  return result;
};

export const blogServices = {
  createBlogIntoDB,
  updatedBlogIntoDB,
  DeletedBlogIntoDB,
  findAllBlogIntoDB,
};
