import { z } from "zod";

const create = z.object({
  body: z.object({
    bookId: z
      .string({ required_error: "Book id is required" })
      .uuid({ message: "Book id is nmo validate UUID format" }),
    memberId: z
      .string({ required_error: "Member id is required" })
      .uuid({ message: "Member id is nmo validate UUID format" }),
  }),
});

export const BorrowValidation = {
  create,
};
