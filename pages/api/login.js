import cookie from "cookie";

export default function login(request, response) {
  if (request.method === "POST") {
    if (request.body !== undefined || request.body !== null) {
      fetch("http://localhost:1337/auth/local", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          identifier: request.body.email,
          password: request.body.password,
        }),
      })
        .then((answer) => answer.json())
        .then((datas) => {
          console.log(datas);
          if (datas.code === 1000) {
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
                body: "you're now logged in",
              },
            });
          } else {
            response.status(400).json({
              status: 400,
              message: {
                type: "error",
                body: "email or password invalid",
              },
            });
          }
        });
    }
  }
}
