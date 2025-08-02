import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function useLogin() {
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handle(route, e) {
    e.preventDefault();
    if (usename.trim() === "" || password.trim() === "") return;
    try {
      const res = await fetch(`http://localhost:3000/v1/api/${route}`, {
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

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/page");
      }

      console.log(data.message);
    } catch (e) {
      console.error("请求异常");
    }
  }

  return { usename, setUsername, password, setPassword, handle };
}
