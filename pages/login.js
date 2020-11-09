import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../utils/validationSchemas"
import AuthTemplate from "../templates/auth.template"
import { useRouter } from "next/router"
import axios from "axios"

function Login() {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState({})
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(loginSchema),
	})

	const onSubmit = (user) => {
		setLoading(true)

		axios({
			method: "post",
			url: "api/login",
			data: {
				identifier: user.email,
				password: user.password,
			},
		}).then(
			(response) => {
				setUser(response.data.user.username)
				router.push(`/${response.data.user.firstname}`)
			},
			(error) => console.log(error)
		)
	}

	return (
		<>
			<Head>
				<title>Login to your account</title>
			</Head>
			{/*  */}
			<div className="container">
				<Link href="/">
					<a>
						<h1 className="text-center">
							<b>Nextrap</b>
						</h1>
					</a>
				</Link>
				<h3 className="text-center text-primary">Signin</h3>
				<div className="row">
					{loading ? (
						<div className="col-12 text-center my-5">
							<div className="spinner-border text-dark" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					) : (
						<form className="col-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
							<div className="form-group">
								<input
									type="email"
									className={`form-control ${errors.email && `is-invalid`}`}
									name="email"
									placeholder="Your email adress"
									autoComplete="off"
									ref={register}
								/>
								{errors.email && (
									<small id="email" className="form-text text-danger">
										{errors.email.message}
									</small>
								)}
							</div>
							<div className="form-group">
								<input
									type="password"
									name="password"
									className={`form-control ${errors.password && `is-invalid`}`}
									placeholder="Your password"
									ref={register}
								/>
								{errors.password && (
									<small id="password" className="form-text text-danger">
										{errors.password.message}
									</small>
								)}
								<Link href="/forgot-password">
									<a>
										<small className="form-text text-muted text-right">
											Forgot your password?
										</small>
									</a>
								</Link>
							</div>
							<button type="submit" className="btn btn-primary btn-block">
								LOGIN →
							</button>
							<Link href="/register">
								<a className="my-4 btn btn-link btn-sm btn-block">
									No account yet? register
								</a>
							</Link>
						</form>
					)}
				</div>
			</div>
		</>
	)
}

export default Login
Login.Template = AuthTemplate
