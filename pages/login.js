import React from "react"
import Link from "next/link"

function login() {
	return (
		<div className="container">
			<h1 className="display-4 text-center">Signin</h1>
			<div className="row">
				<form className="col-5 mx-auto">
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<select className="input-group-text bg-white border-right-0 rounded-left">
									<option value="US" defaultValue>
										+1
									</option>
									<option value="CM">+237</option>
								</select>
							</div>
							<input
								type="tel"
								className="form-control"
								name="phone_number"
								placeholder="Your phone number"
								autoComplete="off"
							/>
						</div>
					</div>
					<div className="form-group">
						<input
							type="password"
							name="password"
							className="form-control"
							placeholder="Password"
						/>
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
