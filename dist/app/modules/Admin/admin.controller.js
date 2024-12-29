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
exports.adminControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const admin_services_1 = require("./admin.services");
const sentResponse_1 = __importDefault(require("../../utils/sentResponse"));
const blockUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId;
    const { userId } = req.params;
    yield admin_services_1.adminService.blockUserFormAdmin(id, userId);
    (0, sentResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'User blocked successfully',
    });
}));
const deletedBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { userId, role } = req.user;
    yield admin_services_1.adminService.deleteBlog(id, userId, role);
    (0, sentResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Blog deleted successfully',
    });
}));
exports.adminControllers = {
    blockUser,
    deletedBlog,
};
