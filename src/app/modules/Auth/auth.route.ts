import express from 'express';
import { userControllers } from './auth.controller';
import { authValidation } from './auth.validation';
import validateRequest from '../../middleware/validateRequest';
const router = express.Router();

router.post(
  '/register',
  validateRequest(authValidation.registrationValidation),
  userControllers.createRegisterUser,
);
router.post(
  '/login',
  validateRequest(authValidation.loginValidation),
  userControllers.loginUser,
);

export const userRoutes = router;
