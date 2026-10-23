import {
  string,
  pipe,
  object,
  trim,
  toLowerCase,
  nonEmpty,
  email,
  maxLength,
} from "valibot";

export const LoginFormSchema = object({
  email: pipe(
    string(),
    trim(),
    toLowerCase(),
    nonEmpty("Please enter your email address"),
    email("Please enter a valid email address"),
    maxLength(255, "Email address is too long"),
  ),
  password: pipe(
    string(),
    nonEmpty("Please enter your password"),
    maxLength(255, "Password is too long"),
  ),
});

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
