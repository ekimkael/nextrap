import Head from "next/head"
import React, { useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import Navbar from "../organisms/Navbar"
import withSession from "../utils/session"

function Account({ user }) {
	const { verify } = useContext(AuthContext)
	useEffect(() => {
		verify(user)
	}, [])

	return (
		<>
			<Head>
				<title>Account | Nextrap</title>
			</Head>
			<Navbar />
			<main className="container">
				<div className="row">
					<h1>This is the account page</h1>
				</div>
			</main>
		</>
	)
}

export const getServerSideProps = withSession(async ({ req, res }) => {
	try {
		// tu vérifies que l'utilisateur est en session
		const user = req.session.get("user")
		if (!user?.isLoggedIn) throw new Error("unauthorized")

		return {
			props: { user: req.session.get("user") },
		}
	} catch (error) {
		// si non tu le rediriges vers le login
		return {
			redirect: {
				permanent: false,
				destination: "/login",
			},
		}
	}
})

export default Account
