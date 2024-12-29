"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.default)(auth_validation_1.authValidation.registrationValidation), auth_controller_1.userControllers.createRegisterUser);
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.authValidation.loginValidation), auth_controller_1.userControllers.loginUser);
exports.userRoutes = router;
