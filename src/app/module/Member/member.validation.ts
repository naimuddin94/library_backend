import { z } from "zod";

const create = z.object({
  body: z.object({
    name: z.string({
      message: "Name should be string",
      required_error: "Name is required",
    }),
    email: z.string({
      message: "Email should be string",
      required_error: "Email is required",
    }),
    phone: z.string({
      message: "Phone should be string",
      required_error: "Phone is required",
    }),
    membershipDate: z.preprocess(
      (arg: unknown) => {
        if (typeof arg === "string") {
          return new Date(arg);
        }

        return arg;
      },
      z.date({
        message: "Membership date should be date format",
        required_error: "Membership date is required",
      })
    ),
  }),
});

const update = z.object({
  body: create.shape.body.partial(),
});

export const MemberValidation = {
  create,
  update,
};
