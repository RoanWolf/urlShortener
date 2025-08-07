import { useState } from "react";
import usePage from "./usePage";
export default function Page() {
  const { originUrl, setCode, code, setOriginUrl, handle,shortUrl } = usePage();
  return (
    <div style={{ color: "#FFFF", margin: "20px", padding: "10px" }}>
      <h1>URL SHortener</h1>

      <div>
        <label htmlFor="inputUrl">
          <span>Origin URL</span>
          <input
            type="text"
            id="inputUrl"
            value={originUrl}
            onChange={(e) => setOriginUrl(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="inputCode">
          <span>code</span>
          <input
            type="text"
            id="inputCode"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button onClick={handle}>生成</button>
      </div>
    </div>
    

    
    ) 
}
