const user = {
  firstName: "John",
  lastName: "Doe",
};

let { firstName, lastName, job = "unknown" } = user;

export { firstName, lastName, job };
