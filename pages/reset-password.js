import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { resetPasswordSchema } from "../utils/validationSchemas"
import { useEffect, useState } from "react"
import AuthTemplate from "../templates/auth.template"

function ResetPassword() {
	const router = useRouter()
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(resetPasswordSchema),
	})

	useEffect(() => {
		if (router.query.token) {
			// API call
			/*fetch(url, {
				headers: {
					Authorization: router.query.token,
				},
				body: JSON.stringify(body),
			}) */
			console.log(router.query.token, "ok")
		} else {
			// router.push("/login")
		}
	}, [])

	const onSubmit = (data) => console.log(data)

	return (
		<>
			<Head>
				<title>Reset Password</title>
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
				<h3 className="text-center text-primary">Reset your password</h3>
				<div className="row">
					<form className="col-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<input
								type="password"
								className={`form-control ${errors.password && `is-invalid`}`}
								name="password"
								placeholder="Your password"
								ref={register}
							/>
							{errors.password && (
								<small id="password" className="form-text text-danger">
									{errors.password.message}
								</small>
							)}
						</div>
						<div className="form-group">
							<input
								type="password"
								name="confirmPassword"
								className={`form-control ${
									errors.confirmPassword && `is-invalid`
								}`}
								placeholder="Confirm your password"
								ref={register}
							/>
							{errors.confirmPassword && (
								<small id="confirmPassword" className="form-text text-danger">
									{errors.confirmPassword.message}
								</small>
							)}
						</div>
						<button type="submit" className="btn btn-primary btn-block">
							RESET PASSWORD →
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default ResetPassword
ResetPassword.Template = AuthTemplate
