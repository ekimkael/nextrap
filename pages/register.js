import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../utils/validationSchemas"
import AuthTemplate from "../templates/auth.template"

function Register() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(registerSchema),
	})
	const onSubmit = (data) => {
		fetch("/api/register")
	}

	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<Head>
				<title>Register</title>
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
				<h3 className="text-center text-primary">Register</h3>
				<div className="row">
					<form className="col-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<div className="form-row">
								<div className="col">
									<input
										name="firstname"
										type="text"
										className={`form-control ${
											errors.firstname && `is-invalid`
										}`}
										placeholder="First name"
										ref={register}
									/>
									{errors.firstname && (
										<small id="firstname" className="form-text text-danger">
											{errors.firstname.message}
										</small>
									)}
								</div>
								<div className="col">
									<input
										name="lastname"
										type="text"
										className={`form-control ${
											errors.lastname && `is-invalid`
										}`}
										placeholder="Last name"
										ref={register}
									/>
									{errors.lastname && (
										<small id="lastname" className="form-text text-danger">
											{errors.lastname.message}
										</small>
									)}
								</div>
							</div>
						</div>

						<div className="form-group">
							<input
								name="email"
								type="email"
								className={`form-control ${errors.email && `is-invalid`}`}
								aria-describedby="emailHelp"
								placeholder="Enter email"
								ref={register}
							/>
							{errors.email && (
								<small id="email" className="form-text text-danger">
									{errors.email.message}
								</small>
							)}
						</div>

						<div className="form-group">
							<div className="input-group">
								<input
									type={isShow ? "text" : "password"}
									name="password"
									ref={register}
									className={`form-control ${errors.password && `is-invalid`}`}
									placeholder="Password"
								/>
								<div className="input-group-append">
									<button
										onClick={() => setIsShow(!isShow)}
										className="btn btn-dark"
										type="button"
									>
										{isShow ? "Hide" : "Show"}
									</button>
								</div>
								{errors.password && (
									<small id="password" className="form-text text-danger">
										{errors.password.message}
									</small>
								)}
							</div>
						</div>
						<button type="submit" className="btn btn-primary btn-block">
							REGISTER →
						</button>
						<Link href="/login">
							<a className="my-4 btn btn-link btn-sm btn-block">
								Already have and account? login
							</a>
						</Link>
					</form>
				</div>
			</div>
		</>
	)
}

export default Register
Register.Template = AuthTemplate
