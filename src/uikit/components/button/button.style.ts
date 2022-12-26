import { colors } from "@uikit/colors";
import { shadows } from "@uikit/shadows";
import styled, { css } from "styled-components";

export const Button = styled.button<{
  $variant?: "primary" | "secondary";
}>`
  padding: 14px 16px;
  border-radius: 8px;
  background-color: ${colors.button.background};
  font-size: 14px;
  width: 100%;

  ${({ $variant = "primary" }) =>
    $variant === "primary"
      ? css`
          background-color: ${colors.button.background};
          color: ${colors.white};
          &:hover,
          &:focus {
            background-color: ${colors.button.hover};
          }
        `
      : css`
          color: ${colors.black};
          background-color: ${colors.white};
          ${shadows.button.main};
          &:hover {
            ${shadows.button.hover};
          }
        `}

  &:disabled {
    background-color: ${colors.button.backgroundDisabled};
    color: ${colors.button.colorDisabled};
    cursor: default;
  }
`;
