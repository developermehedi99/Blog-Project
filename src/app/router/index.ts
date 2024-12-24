import { Router } from 'express';
import { blogRouters } from '../modules/Blog/blog.route';

const router = Router();
const moduleRouter = [
  {
    path: '/blogs',
    module: blogRouters,
  },
];

moduleRouter.forEach((route) => {
  router.use(route.path, route.module);
});

export default router;
