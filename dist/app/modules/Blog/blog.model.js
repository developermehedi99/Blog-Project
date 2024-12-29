"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'title must required'],
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'content must required'],
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
