import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { forgotSchema } from "../utils/validationSchemas"
import AuthTemplate from "../templates/auth.template"

const ForgotPassword = () => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(forgotSchema),
	})
	const onSubmit = (data, e) => {
		console.log(data)
	}

	return (
		<>
			<Head>
				<title>Forgot Password</title>
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
				<h3 className="text-center text-primary">Forgot Password</h3>
				<div className="row">
					<form className="col-md-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<div className="input-group">
								<input
									name="email"
									ref={register}
									type="email"
									className={`form-control ${errors.email && `is-invalid`}`}
									placeholder="Your email address"
									aria-label="Your email address"
									aria-describedby="button-addon2"
								/>

								<div className="input-group-append">
									<button
										className="btn btn-primary"
										type="submit"
										id="button-addon2"
									>
										SEND →
									</button>
								</div>
							</div>
							{errors.email && (
								<small id="email" className="form-text text-danger">
									{errors.email.message}
								</small>
							)}
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
export default ForgotPassword
ForgotPassword.Template = AuthTemplate
