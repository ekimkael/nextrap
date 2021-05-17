import withSession from "../../utils/session"

export default withSession(async (req, res) => {
	const url = `${process.env.API_URL}/auth/login`
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
		if (user.code != 1000) {
			res.status(400)
			throw new Error(user.message)
		}
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
		res.status(400).json({ message: error.message })
	}
})
