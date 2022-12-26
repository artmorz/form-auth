import * as yup from "yup";

import validate from "../validate";

let schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .matches(validate.email.reg, validate.email.errorMessage),
  password: yup
    .string()
    .required()
    .matches(validate.password.reg, validate.password.errorMessage),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], validate.confirmPassword.errorMessage),
});

export default schema;
