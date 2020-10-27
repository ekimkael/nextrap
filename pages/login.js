import Link from "next/link"
import axios from "axios"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../utils/validationSchemas"

function login() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(loginSchema),
	})

	const onSubmit = (user) => {
		let datas = axios.post("http://localhost:1337/auth/local", {
			identifier: user.email,
			password: user.password,
		})

		console.log(datas)
	}

	return (
		<div className="container">
			<h1 className="display-4 text-center">Signin</h1>
			<div className="row">
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
						<Link href="/forgot">
							<a>
								<small className="form-text text-muted text-right">
									Forgot your password?
								</small>
							</a>
						</Link>
					</div>
					<button type="submit" className="btn btn-primary btn-block">
						LOGIN
					</button>
					<Link href="/register">
						<a className="my-4 btn btn-link btn-sm btn-block">
							No account yet? register
						</a>
					</Link>
				</form>
			</div>
		</div>
	)
}

export default login
