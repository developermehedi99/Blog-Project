"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sentResponse_1 = __importDefault(require("../../utils/sentResponse"));
const blog_services_1 = require("./blog.services");
const createdBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const author = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const data = req.body;
    const result = yield blog_services_1.blogServices.createBlogIntoDB(Object.assign(Object.assign({}, data), { author }));
    (0, sentResponse_1.default)(res, {
        success: true,
        statusCode: 201,
        message: 'Blog created successfully',
        data: result,
    });
}));
const findAllBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const result = yield blog_services_1.blogServices.findAllBlogIntoDB(query);
    (0, sentResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Blogs fetched successfully',
        data: result,
    });
}));
const updatedBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const result = yield blog_services_1.blogServices.updatedBlogIntoDB(id, userId, req.body);
    (0, sentResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Your blog updated successfully',
        data: result,
    });
}));
const deletedBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { userId } = req.user;
    yield blog_services_1.blogServices.DeletedBlogIntoDB(id, userId);
    (0, sentResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Blog deleted successful',
    });
}));
exports.blogsControllers = {
    createdBlog,
    updatedBlog,
    deletedBlog,
    findAllBlogs,
};
