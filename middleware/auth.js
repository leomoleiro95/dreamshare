import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length > 80;
   // console.log("tokenLength", token.length);
   // console.log("token from middleware", token);
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      //console.log("JWT", token)
      req.userId = decodedData?.id;
    } else {
      decodedData = token;
      //console.log("googleToken",token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
