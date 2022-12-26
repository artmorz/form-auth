import { colors } from "@uikit/colors";
import { media } from "@uikit/media";
import { shadows } from "@uikit/shadows";
import styled from "styled-components";

export const AuthPage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthStyled = styled.div`
  height: 660px;
  width: 1100px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  ${shadows.container};
  ${media.forLaptop} {
    width: auto;
  }
  ${media.forPhone} {
    width: 100%;
    height: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 40px 60px;
  justify-content: center;
  ${media.forPhone} {
    padding: 40px 30px;
  }
  ${media.forPhoneMedium} {
    padding: 40px 20px;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  ${media.forPhone} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  margin: 10px 0;
`;

export const IllustrationWrapper = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.forLaptop} {
    display: none;
  }
`;
export const Illustration = styled.img`
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  height: 100%;
  width: 100%;
`;

export const PasswordRequirementStyled = styled.div`
  background-color: ${colors.shared.backgroundSuccess};
  border-radius: 8px;
  text-align: left;
  padding: 8px 16px;
`;
