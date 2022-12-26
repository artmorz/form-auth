import { colors } from "@uikit/colors";
import styled, { css } from "styled-components";

type Size = 12 | 14 | 16 | 30;
type Wight = 300 | 400 | 500 | 600;
export const Text = styled.span<{
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  $color?: keyof typeof colors.text;
  $size?: Size;
  $weight?: Wight;
  $inline?: boolean;
}>`
  margin: ${({ mt = 0, mb = 0, mr = 0, ml = 0 }) =>
    `${mt}px ${mr}px ${mb}px ${ml}px`};
  color: ${({ $color = "colorDark" }) => colors.text[$color]};
  font-size: ${({ $size = 16 }) => $size}px;
  font-weight: ${({ $weight = 400 }) => $weight};
  ${({ $inline = true }) =>
    !$inline &&
    css`
      display: block;
    `}
`;
