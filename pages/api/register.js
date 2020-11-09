import cookie from "cookie";
import jwt from "jsonwebtoken";
import { convertUnixTimeToSeconds } from "../../utils/utilities";
const api = "https://testifyio.herokuapp.com";

export default async function (request, response) {
  if (request.method === "POST") {
    await fetch(`${api}/auth/local/register`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(request.body),
    })
      .then((answer) => answer.json())
      .then(function (datas) {
        if (datas.statusCode === 400) {
          response.status(400).json({
            status: 400,
            message: {
              type: "error",
              body: "Registration failed",
            },
          });
        } else {
          var decoded = jwt.decode(datas.jwt);
          response.setHeader(
            "Set-Cookie",
            cookie.serialize("_SESSIONID_", datas.jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              sameSite: "strict",
              maxAge: decoded.exp,
              path: "/",
              // maxAge: 10800,
            })
          );

          response.status(200).json({
            status: 200,
            message: {
              type: "success",
              body: "Registration successful",
            },
            username: datas.user.username,
          });
        }
      });
  } else {
    console.log(request.method);
  }
}
