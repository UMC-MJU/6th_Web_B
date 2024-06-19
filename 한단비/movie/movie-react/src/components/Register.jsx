import React from "react";
import axios from "axios";

const ApiRegister = async (
  realName,
  userEmail,
  userAge,
  userId,
  userPassword,
  pwdCheck
) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/signup",
      {
        name: realName,
        email: userEmail,
        age: userAge,
        username: userId,
        password: userPassword,
        passwordCheck: pwdCheck,
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(
    //   `${(realName, userEmail, userAge, userId, userPassword, pwdCheck)}`
    // );
    return response.data;
  } catch (error) {
    console.error("Error axios data", error);
    throw error;
  }
};

export default ApiRegister;
