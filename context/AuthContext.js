import { createContext, useState } from "react"
import { useRouter } from "next/router"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const router = useRouter()
	const [user, setUser] = useState(null)
	const [message, setMessage] = useState("")
	const [loading, setLoading] = useState(false)

	const signup = async (inputs) => {
		setLoading(true)
		try {
			const response = await fetch("/api/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(inputs),
			})
			const data = await response.json()
			if (response.status != 200) {
				throw new Error(data.message)
			}
			setUser(data)
			router.push("/account")
			setLoading(false)
			setMessage("")
		} catch (error) {
			setLoading(false)
			setMessage(error.message)
		}
	}

	const login = async (inputs) => {
		setLoading(true)
		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(inputs),
			})
			const data = await response.json()
			if (response.status != 200) {
				throw new Error(data.message)
			}
			setUser(data)
			router.push("/account")
			setLoading(false)
			setMessage("")
		} catch (error) {
			setLoading(false)
			setMessage(error.message)
		}
	}

	const logout = async () => {
		const response = await fetch("/api/logout")
		const data = await response.json()
		console.log(data)
		setUser(data.user)
		router.push("/login")
	}

	const verify = async (user) => {
		if (user === undefined) {
			const response = await fetch("/api/user")
			const data = await response.json()
			setUser(data)
		} else {
			setUser(user)
		}
	}

	return (
		<AuthContext.Provider
			value={{ user, loading, message, signup, login, logout, verify }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
