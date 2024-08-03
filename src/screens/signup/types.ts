import * as yup from "yup";

export const signupSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .test(
      "compare-confirm-password",
      "Confirm password must be the same as password",
      function (value) {
        const { password } = this.parent;
        return value === password;
      }
    ),
});

export type signupForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
