import { useState } from "react";
export default function usePage() {
  const [originUrl, setOriginUrl] = useState("");
  const [code, setCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  async function handle(e) {
    e.preventDefault();
    if ( originUrl.trim() === "") return;
    console.log(originUrl, code);
    const result = await fetch("http://localhost:3000/v1/api/url", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        originalUrl: originUrl,
        urlCode: code,
      }),
    });
    const data = await result.json();
    if (data.shortUrl) {
      setShortUrl(data.shortUrl);
    }
    console.log(data.shortUrl);
    setCode("");
    setOriginUrl("");
  }

  return { originUrl, setCode, code, setOriginUrl, handle, shortUrl };
}
