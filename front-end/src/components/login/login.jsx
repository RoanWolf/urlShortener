import useLogin from "./useLogin.js";
export default function Login() {
  const { usename, setUsername, password, setPassword, handle } =
    useLogin();
  return (
    <div style={{ color: "#FFFF", margin: "20px", padding: "10px" }}>
      <h1>Login Page</h1>

      <div>
        <label htmlFor="inputUserName">
          <span>输入</span>
          <input
            type="text"
            id="inputUserName"
            value={usename}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="inputUserPassword">
          <span>密码</span>
          <input
            type="password"
            id="inputUserPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button onClick={(e)=>handle('login',e)}>登录</button>
        <button onClick={(e)=>handle('register',e)}>注册</button>
      </div>
    </div>
  );
}
