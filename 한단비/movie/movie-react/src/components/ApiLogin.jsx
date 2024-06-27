import React from "react";
import axios from "axios";

const ApiLogin = async (userId, userPassword) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/login",
      {
        username: userId,
        password: userPassword,
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    let token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
    } else {
      console.log("토큰 없음");
    }
    return response.data;
  } catch (error) {
    console.error("Error axios data", error);
    throw error;
  }
};

export default ApiLogin;
