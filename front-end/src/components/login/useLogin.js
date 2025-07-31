import { useState } from "react";

export default function useLogin() {
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    if (usename.trim() === "" || password.trim() === "") return;
    try {
      const res = await fetch("http://localhost:3000/v1/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usename,
          password: password,
        }),
      });
      const data = await res.json();
      console.log(data.message);
    } catch (e) {
      console.error("请求异常");
    }
  }

  return { usename, setUsername, password, setPassword, handleRegister };
}