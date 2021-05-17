import withSession from "../../utils/session"

export default withSession(async (req, res) => {
	const url = `${process.env.API_URL}/auth/register`
	try {
		// we check that the user exists and store some data in session
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(req.body),
		})
		const user = await response.json()
		const { data, token } = user
		// _sid for session ID
		const _sid = { isLoggedIn: true, token }
		req.session.set("user", _sid)
		await req.session.save()
		res.status(200).json({ isLoggedIn: true, data })
	} catch (error) {
		if (process.env.NODE_ENV === "development") {
			console.log(error)
		}
		const { response: fetchResponse } = error
		res.status(fetchResponse?.status || 500).json(error.data)
	}
})
