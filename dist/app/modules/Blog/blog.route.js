"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouters = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)('user'), (0, validateRequest_1.default)(blog_validation_1.blogValidationZod.createBlogValidation), blog_controller_1.blogsControllers.createdBlog);
router.get('/', blog_controller_1.blogsControllers.findAllBlogs);
router.patch('/:id', (0, auth_1.default)('user'), (0, validateRequest_1.default)(blog_validation_1.blogValidationZod.updatedBlogValidation), blog_controller_1.blogsControllers.updatedBlog);
router.delete('/:id', (0, auth_1.default)('user'), blog_controller_1.blogsControllers.deletedBlog);
exports.blogRouters = router;
