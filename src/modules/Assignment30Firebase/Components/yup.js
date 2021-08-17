import * as yup from "yup";

const SignupSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Required!")
    .min(6, "Enter Your Name!")
    .max(20, "Name is too long!"),

  city: yup.string().required("Required!").max(15, "Name is too long!"),
  message: yup.string().required("Required!").max(50, "Message is too long!"),
  email: yup.string().email("Invalid Email!").required("Required!"),
  password: yup
    .string()
    .required("Required!")
    .max(20, "The password is too long!")
    .min(6, "The password is too short!"),
});

export default SignupSchema;
