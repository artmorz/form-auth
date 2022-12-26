import * as yup from "yup";

import validate from "../validate";

let schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .matches(validate.email.reg, validate.email.errorMessage),
  password: yup.string().required(),
});

export default schema;
