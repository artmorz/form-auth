import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import { router } from "../auth.router";
import { FormWrapper } from "../auth.style";
import SignIn from "../sign-in";
import SignUp from "../sign-up";

export const Form = memo(() => {
  return (
    <FormWrapper>
      <Routes>
        <Route path={router.SIGN_IN} element={<SignIn />} />
        <Route path={router.SIGN_UP} element={<SignUp />} />
      </Routes>
    </FormWrapper>
  );
});
