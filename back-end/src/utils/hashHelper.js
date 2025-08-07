import bcrypt from "bcrypt";

export default async function encryptData(json) {
    
  for (let user of json) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  return json;
}
