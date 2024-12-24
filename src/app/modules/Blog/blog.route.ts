import { Router } from 'express';
import { blogsControllers } from './blog.controller';
import validateRequest from '../../middleware/validateRequest';
import { blogValidationZod } from './blog.validation';

const router = Router();

router.post(
  '/',
  validateRequest(blogValidationZod.createBlogValidation),
  blogsControllers.createdBlog,
);
router.get('/', blogsControllers.findAllBlogs);

router.delete('/:id', blogsControllers.deletedBlog);
router.patch(
  '/:id',
  validateRequest(blogValidationZod.updatedBlogValidation),
  blogsControllers.updatedBlog,
);

export const blogRouters = router;
