import jwt from "jsonwebtoken";

  const JWT_SECRET = process.env.JWT_SECRET;

export function generateToken(data) {
  // like encode - don't upload key inform


  const token = jwt.sign(data, JWT_SECRET);
  return token;
}
export function verifyToken(token){
    try{
        jwt.verify(token,JWT_SECRET);
    }catch(error){
        throw new Error("jwt token error");
    }
}