import { Router } from 'express';
import { userRoutes } from '../modules/Auth/auth.route';
import { adminRouter } from '../modules/Admin/admin.route';
import { blogRouters } from '../modules/Blog/blog.route';

const router = Router();
const moduleRouter = [
  {
    path: '/auth',
    module: userRoutes,
  },
  {
    path: '/blogs',
    module: blogRouters,
  },
  {
    path: '/admin',
    module: adminRouter,
  },
];

moduleRouter.forEach((route) => {
  router.use(route.path, route.module);
});

export default router;
