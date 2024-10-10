import { z } from "zod";

const validationCreateUserSchema = z.object({
  name: z.string().min(3),
  email: z
    .string({
      required_error: "Email is required",
      message: "Invalid email",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
      message: "Password must be at least 3 characters",
    })
    .min(3),
});

const validationUpdateUserSchema = z.object({
  id: z.number().min(1),
  name: z.string().min(3),
  password: z
    .string({
      required_error: "Password is required",
      message: "Password must be at least 3 characters",
    })
    .min(3),
});

const validationDeleteUserSchema = z.object({
  id: z.number().min(1),
});

const validationLoginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      message: "Invalid email",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
      message: "Password must be at least 3 characters",
    })
    .min(3),
});

export {
  validationCreateUserSchema,
  validationUpdateUserSchema,
  validationDeleteUserSchema,
  validationLoginUserSchema,
};
