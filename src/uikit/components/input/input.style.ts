import { colors } from "@uikit/colors";
import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const InputStyled = styled.input<{
  $variant?: "error";
}>`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 40px 14px 16px;
  border-radius: 8px;
  background-color: ${colors.input.background};
  font-size: 14px;
  border: 0;
  &::placeholder {
    color: ${colors.input.placeholder};
  }

  ${({ $variant }) =>
    !$variant
      ? css`
          &:hover,
          &:focus {
            background-color: ${colors.input.hover};
          }
        `
      : css`
          transition: unset;
          background-color: ${colors.input.backgroundError};
        `}
`;

export const IconWrapper = styled.div`
  right: 12px;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
