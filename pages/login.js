import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import { yupResolver } from "@hookform/resolvers/yup"
import AuthTemplate from "../templates/auth.template"
import { loginSchema } from "../utils/validationSchemas"

function Login() {
	const router = useRouter()
	const { user, message, loading, login, verify } = useContext(AuthContext)
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(loginSchema),
	})

	useEffect(() => {
		verify()
		if (user && user?.isLoggedIn) {
			router.push("/account")
		}
	}, [user?.isLoggedIn])

	const onSubmit = (user) => {
		login(user)
	}

	if (!user || user?.isLoggedIn) {
		return (
			<>
				<Head>
					<title>Login to your account | Nextrap</title>
				</Head>
				{/*  */}
				<div className="spinner-grow text-primary" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</>
		)
	}

	return (
		<>
			<Head>
				<title>Login to your account | Nextrap</title>
			</Head>
			{/*  */}
			<div className="container">
				<div className="row">
					<form className="col-md-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
						<Link href="/">
							<a className="text-dark">
								<h1 className="text-center">
									<b>Nextrap</b>
								</h1>
							</a>
						</Link>
						<h4 className="text-center">Join the creativerse</h4>
						{/* NOTIFICATIONS */}
						{message !== "" ? (
							<div className="alert alert-danger" role="alert">
								{message}
							</div>
						) : (
							""
						)}
						{/* END NOTIFICATIONS */}
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
						<button
							type="submit"
							className="btn btn-primary btn-block"
							disabled={loading === true ? true : false}
						>
							{loading === true ? `LOADING...` : `LOGIN →`}
						</button>
						<Link href="/register">
							<a className="my-4 btn btn-link btn-sm btn-block">
								No account yet? register
							</a>
						</Link>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
Login.Template = AuthTemplate
