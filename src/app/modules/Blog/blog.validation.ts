import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title must be required',
    }),
    content: z.string({
      required_error: 'writing something',
    }),
    author: z.string().optional(),
    isPublished: z.boolean().default(true),
  }),
});
const updatedBlogValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
  }),
});

export const blogValidationZod = {
  createBlogValidation,
  updatedBlogValidation,
};
