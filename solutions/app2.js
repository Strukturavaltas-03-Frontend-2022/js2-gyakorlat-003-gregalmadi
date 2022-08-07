const user = {
  firstName: "John",
  lastName: "Doe",
};

let { lastName: l, firstName: f, j = "unknown" } = user;

export { l, f, j };
