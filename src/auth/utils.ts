import { ErrorOption } from "react-hook-form";

export const getErrorMessage = (error: ErrorOption | undefined) => {
  if (error?.type !== "required") return error?.message;
  else return "";
};
