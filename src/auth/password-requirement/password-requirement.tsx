import { Text } from "@components/text";
import { FC, memo } from "react";

import { PasswordRequirementStyled } from "../auth.style";
import validate from "../validate";

interface PasswordRequirementProps {
  password: string;
}
export const PasswordRequirement: FC<PasswordRequirementProps> = memo(
  ({ password }) => (
    <PasswordRequirementStyled>
      <Text $size={14}>Password requirement:</Text>
      <div>
        {validate.password.underRegs.map((i, idx, arr) => (
          <Text
            key={idx}
            $color={i.reg.test(password) ? "success" : "colorGray2"}
            $size={14}
          >
            {i.errorMessage + (idx !== arr.length - 1 ? ", " : "")}
          </Text>
        ))}
      </div>
    </PasswordRequirementStyled>
  )
);
