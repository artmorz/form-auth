import logo from "@assets/illustrations";
import React, { memo } from "react";

import {
  AuthPage,
  AuthStyled,
  Illustration,
  IllustrationWrapper,
} from "./auth.style";
import { Form } from "./form";

export const Auth = memo(() => {
  return (
    <AuthPage>
      <AuthStyled>
        <Form />
        <IllustrationWrapper>
          <Illustration alt="" src={logo} loading="lazy" />
        </IllustrationWrapper>
      </AuthStyled>
    </AuthPage>
  );
});
