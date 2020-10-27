import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { resetPasswordSchema } from "../utils/validationSchemas"
import { useEffect, useState } from "react"
import { route } from "next/dist/next-server/server/router"

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
		} else {
			router.push("/login")
		}
	}, [])

	const onSubmit = (data) => console.log(data)

	return (
		<div className="container">
			<h1 className="display-4 text-center">Reset your password</h1>
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
						RESET PASSWORD
					</button>
				</form>
			</div>
		</div>
	)
}

export default ResetPassword
