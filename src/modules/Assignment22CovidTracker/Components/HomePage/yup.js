import * as yup from "yup";

const SignupSchema = yup.object().shape({
  userName: yup
    .string()
    .min(6, "Enter Your Name!")
    .max(20, "Name is too long!")
    .required("Required!"),
  city: yup.string().required("Required!").max(15, "Name is too long!"),
  age: yup
    .number("It should be a Number!")
    .required("Required!")
    .positive("Not a Valid Age!")
    .integer(),
  email: yup.string().email("Invalid Email!").required("Required!"),
  password: yup
    .string()
    .required("Required!")
    .max(20, "The password is too long!")
    .min(6, "The password is too short!"),
});

export default SignupSchema;
