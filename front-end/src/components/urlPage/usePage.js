import { useState } from "react";
export default function usePage() {
  const [originUrl, setOriginUrl] = useState("");
  const [code, setCode] = useState("");

  async function handle(e) {
    e.preventDefault();
    if(code.trim() === '' || originUrl.trim() === '') return;
    console.log(originUrl,code);
    setCode("");
    setOriginUrl("");
  }

  return { originUrl, setCode, code, setOriginUrl, handle };
}
