"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidationZod = void 0;
const zod_1 = require("zod");
const createBlogValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title must be required',
        }),
        content: zod_1.z.string({
            required_error: 'writing something',
        }),
        author: zod_1.z.string().optional(),
        isPublished: zod_1.z.boolean().default(true),
    }),
});
const updatedBlogValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
    }),
});
exports.blogValidationZod = {
    createBlogValidation,
    updatedBlogValidation,
};
