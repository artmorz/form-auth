import { css } from "styled-components";

export const shadows = {
  container: css`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `,
  button: {
    main: css`
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    `,
    hover: css`
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    `,
  },
};
