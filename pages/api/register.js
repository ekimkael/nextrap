import cookie from "cookie";
const api = "http://localhost:1337";

export default function register(request, response) {
  if (request.method === "POST") {
    console.log(request.body);
    fetch(`${api}/auth/local/register`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(request.body),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (datas) {
        console.log(datas.statusCode);
        if (datas.statusCode === 200) {
          response.setHeader(
            "Set-Cookie",
            cookie.serialize("_SESSIONID_", datas.token, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              sameSite: "strict",
              maxAge: 300,
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
          });
        } else {
          response.status(400).json({
            status: 400,
            message: {
              type: "error",
              body: "Registration failed",
            },
          });
        }
      });
  }
}
