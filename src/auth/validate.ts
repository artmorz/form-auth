const validate = {
  email: {
    errorMessage: "Invalid email format",
    reg: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
  },
  password: {
    errorMessage: "Password does not meet the requirements",
    get reg() {
      return new RegExp(
        this.underRegs
          .map((i) => i.reg)
          .join("")
          .replace(/\//g, "")
      );
    },
    underRegs: [
      {
        reg: /(?=.*?[0-9])/,
        errorMessage: "1 digit",
      },
      {
        reg: /(?=.*?[A-Z])/,
        errorMessage: "1 uppercase letter",
      },
      {
        reg: /.{8,}/,
        errorMessage: "8 characters",
      },
    ],
  },
  confirmPassword: {
    errorMessage: "Passwords do not match",
  },
};

export default validate;
