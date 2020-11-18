import cookie from "cookie"

export default function login(request, response) {
	if (request.method === "POST") {
		if (request.body !== undefined || request.body !== null) {
			fetch("https://testifyio.herokuapp.com/auth/local", {
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({
					identifier: request.body.identifier,
					password: request.body.password,
				}),
			})
				.then((answer) => answer.json())
				.then((datas) => {
					if (datas.statusCode === 400) {
						response.status(200).json({
							status: 400,
							message: {
								type: "error",
								body: "The email address or password is incorrect",
							},
						})
					} else {
						response.setHeader(
							"Set-Cookie",
							cookie.serialize("_SESSIONID_", datas.jwt, {
								httpOnly: false,
								secure: process.env.NODE_ENV !== "development",
								sameSite: "strict",
								maxAge: 3600,
								path: "/",
							})
						)

						response.status(200).json({
							status: 200,
							message: {
								type: "success",
								body: "you're now logged in",
							},
							user: datas.user,
						})
					}
				})
		}
	}
}
