
import urlRecord from "../models/urlRecordModel.js";
import cryptoRandomString from "crypto-random-string";

export async function hasOriginalUrl(originalUrl) {
  const result = await urlRecord.findOne({ where: { originalUrl } });
  return result !== null;
}

const SHORT_URL_LENGTH = Number(process.env.SHORT_URL_LENGTH); 
const PROJECT_URL = process.env.PROJECT_URL;
export async function generalizeRandomShortUrl(originalUrl) {
  const randomString = cryptoRandomString({
    length: SHORT_URL_LENGTH,
    type: "url-safe",
  });
  const shortUrl = PROJECT_URL + randomString;
  await urlRecord.create({ originalUrl, urlCode:randomString , shortUrl});
  return shortUrl;
}
export async function generalizeCustomShortUrl(originalUrl,urlCode) {
  
  const shortUrl = PROJECT_URL + urlCode;
  await urlRecord.create({ originalUrl, urlCode , shortUrl});
  return shortUrl;
}