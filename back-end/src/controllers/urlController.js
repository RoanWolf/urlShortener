import validator from "validator";
import {
  hasOriginalUrl,
  generalizeRandomShortUrl,
  generalizeCustomShortUrl,
} from "../services/urlServices.js";

export async function generalizeShortUrl(req, res) {
  const { originalUrl, urlCode } = req.body;
  if (!originalUrl || !validator.isURL(originalUrl)) {
    return res.status(401).json({ message: "originalUrl format error" });
  }

  if (await hasOriginalUrl(originalUrl)) {
    return res
      .status(401)
      .json({ message: "originalUrl exisits , generalize fail" });
  }

  const shortUrl = urlCode
    ? await generalizeCustomShortUrl(originalUrl, urlCode)
    : await generalizeRandomShortUrl(originalUrl);
  
    return res.status(201).json({message:"ok",shortUrl})
}
