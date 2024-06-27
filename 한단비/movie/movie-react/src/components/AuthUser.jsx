import React from "react";
import axios from "axios";

const AuthUser = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:8080/auth/me", {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error axios data", error);
    throw error;
  }
};

export default AuthUser;
