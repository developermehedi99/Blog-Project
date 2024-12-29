import { Router } from 'express';
import { blogsControllers } from './blog.controller';
import validateRequest from '../../middleware/validateRequest';
import { blogValidationZod } from './blog.validation';
import auth from '../../middleware/auth';

const router = Router();

router.post(
  '/',
  auth('user'),
  validateRequest(blogValidationZod.createBlogValidation),
  blogsControllers.createdBlog,
);
router.get('/', blogsControllers.findAllBlogs);

router.patch(
  '/:id',
  auth('user'),
  validateRequest(blogValidationZod.updatedBlogValidation),
  blogsControllers.updatedBlog,
);

router.delete('/:id', auth('user'), blogsControllers.deletedBlog);

export const blogRouters = router;
