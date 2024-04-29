import { useState } from "react";

function randomPassword(length) {
  const allowedChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*-+=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allowedChar.length);
    password += allowedChar.charAt(index);
  }
  return password;
}
const useCreatePassword = (passwordSize) => {
  const [createdPass, setCreatedPass] = useState();
  const newPassword = () => {
    setCreatedPass(randomPassword(passwordSize));
  };

  return { createdPass, newPassword };
};

export default useCreatePassword;
