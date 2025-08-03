import cryptoRandomString, {
  cryptoRandomStringAsync,
} from "crypto-random-string";
import UrlRecord from "../models/urlRecordModel";
const PROJECT_URL = process.env.PROJECT_URL;
export async function generateShortUrl(customUrlCode = "") {
  if (customUrlCode) {
    return `${PROJECT_URL}/${customUrlCode}`;
  }
  let urlCOde;
  while (ture) {
    urlCOde = cryptoRandomString({
      length: process.env.SHORT_URL_LENGTH,
      type: "url-safe",
    });
    const ok = await UrlRecord.findOne({ where: { urlCOde } });
    if (ok === null) break;
  }
  return `${PROJECT_URL}/${urlCOde}`;
}
