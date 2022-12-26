import { Button, Input, Text } from "@components/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, memo, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { router } from "../auth.router";
import { Form, Wrapper } from "../auth.style";
import { PasswordRequirement } from "../password-requirement";
import { getErrorMessage } from "../utils";
import schema from "./schema";

const SignUp: FC = memo(() => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const {
    watch,
    trigger,
    formState: { errors, isValid, isDirty },
  } = methods;

  const password = watch("password");

  useEffect(() => {
    trigger("confirmPassword");
  }, [trigger, password]);

  return (
    <FormProvider {...methods}>
      <Form>
        <Text as={"h1"} $size={30} $color={"colorDark"} $weight={500} mb={8}>
          CREATE AN ACCOUNT
        </Text>
        <Text $size={16} $color={"colorGray2"} mb={10}>
          Let's get started with your 30 day free trial
        </Text>
        <Wrapper>
          <Input
            name="email"
            error={getErrorMessage(errors.email)}
            maxLength={30}
            placeholder={"Email"}
          />
        </Wrapper>
        <Wrapper>
          <Input
            name="password"
            type="password"
            autoComplete={"off"}
            maxLength={30}
            error={getErrorMessage(errors.password)}
            placeholder={"Password"}
          />
        </Wrapper>
        <Wrapper>
          <Input
            name="confirmPassword"
            autoComplete={"off"}
            type="password"
            maxLength={30}
            error={getErrorMessage(errors.confirmPassword)}
            placeholder={"Confirm password"}
          />
        </Wrapper>
        <Wrapper>
          <PasswordRequirement password={password} />
        </Wrapper>
        <Wrapper>
          <Button disabled={!isDirty || !isValid}>CREATE AN ACCOUNT</Button>
        </Wrapper>
        <Text $color={"colorGray2"} mt={10} mb={4}>
          Do you have an account?
        </Text>
        <Wrapper>
          <Link to={router.SIGN_IN}>
            <Button type="button" $variant={"secondary"}>
              SIGN IN TO THE APP
            </Button>
          </Link>
        </Wrapper>
      </Form>
    </FormProvider>
  );
});

export default SignUp;
