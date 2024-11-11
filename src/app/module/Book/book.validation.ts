import { z } from "zod";

const create = z.object({
  body: z.object({
    title: z.string({
      message: "Title should be string format",
      required_error: "Title is required",
    }),
    genre: z.string({
      message: "Genre should be string format",
      required_error: "Genre is required",
    }),
    publishedYear: z.number({
      message: "Published year should be number",
      required_error: "Published year is required",
    }),
    totalCopies: z.number({
      message: "Total copies should be number",
      required_error: "Total copies is required",
    }),
    availableCopies: z.number({
      message: "Available copies should be number",
      required_error: "Available copies is required",
    }),
  }),
});

const update = create.partial();

export const BookValidation = {
  create,
  update,
};
