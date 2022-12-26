import { InvisibleEye, VisibleEye } from "@assets/icons";
import { FC, InputHTMLAttributes, memo, useState } from "react";
import { useFormContext } from "react-hook-form";

import { Text } from "../text";
import {
  Container,
  IconWrapper,
  InputStyled,
  InputWrapper,
} from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  name: string;
}

export const Input: FC<InputProps> = memo(
  ({ error, name, type, ...htmlAttributes }) => {
    const [typePassword, setTypePassword] = useState(type);

    const toggleTypePassword = (e: any) => {
      e.stopPropagation();

      setTypePassword((state) => (state === "password" ? "text" : "password"));
    };

    const { register } = useFormContext();
    return (
      <Container>
        <InputWrapper>
          <InputStyled
            type={typePassword}
            $variant={error ? "error" : undefined}
            {...register(name)}
            {...htmlAttributes}
          />

          {type === "password" &&
            (typePassword === "password" ? (
              <IconWrapper>
                <InvisibleEye
                  onClick={toggleTypePassword}
                  height={20}
                  width={20}
                />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <VisibleEye
                  onClick={toggleTypePassword}
                  height={20}
                  width={20}
                />
              </IconWrapper>
            ))}
        </InputWrapper>
        {error && (
          <Text
            $inline={false}
            ml={16}
            mt={4}
            $size={12}
            $color="error"
            as={"label"}
          >
            {error}
          </Text>
        )}
      </Container>
    );
  }
);
