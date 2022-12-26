import { Button, Input, Text } from "@components/index";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FC, memo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { router } from "../auth.router";
import { Form, Wrapper } from "../auth.style";
import { getErrorMessage } from "../utils";
import schema from "./schema";

const SignIn: FC = memo(() => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const {
    formState: { errors, isValid, isDirty },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Form>
        <Text as={"h1"} $size={30} color={"colorDark"} $weight={500} mb={8}>
          SIGN IN TO THE APP
        </Text>
        <Wrapper>
          <Input
            error={getErrorMessage(errors.email)}
            name="email"
            maxLength={30}
            placeholder={"Email"}
          />
        </Wrapper>
        <Wrapper>
          <Input
            error={getErrorMessage(errors.password)}
            type="password"
            maxLength={30}
            name="password"
            placeholder={"Password"}
          />
        </Wrapper>
        <Wrapper>
          <Button disabled={!isDirty || !isValid}>SIGN IN</Button>
        </Wrapper>
        <Text $color={"colorGray2"} mt={10} mb={4}>
          Do you not have an account?
        </Text>
        <Wrapper>
          <Link to={router.SIGN_UP}>
            <Button type="button" $variant={"secondary"}>
              CREATE A NEW ACCOUNT
            </Button>
          </Link>
        </Wrapper>
      </Form>
    </FormProvider>
  );
});

export default SignIn;
