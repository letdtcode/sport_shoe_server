import bcrypt from "bcryptjs";

export const users = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "user",
    email: "user@gmail.com",
    password: bcrypt.hashSync("123456", 10)
  }
];
