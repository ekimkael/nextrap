import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { settingsSchema } from "../utils/validationSchemas"
import { useRouter } from "next/router"
import { withCookies } from "react-cookie"

function Settings({ info, cookies }) {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState(info)
	const [successMessage, setSuccessMessage] = useState("")
	const { register, handleSubmit, errors, setValue } = useForm({
		resolver: yupResolver(settingsSchema),
	})

	useEffect(() => {
		if (user === undefined) {
			console.log("object")
			fetch(
				"https://cors-anywhere.herokuapp.com/https://testifyio.herokuapp.com/users/me",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						Authorization: `Bearer ${cookies.get("_SESSIONID_")}`,
					},
				}
			)
				.then((response) => response.json())
				.then((data) => {
					setUser(data)
					setValue("firstname", data.firstname)
					setValue("lastname", data.lastname)
					setValue("username", data.username)
					setValue("email", data.email)
				})
		} else {
			setValue("firstname", user.firstname)
			setValue("lastname", user.lastname)
			setValue("username", user.username)
			setValue("email", user.email)
		}
	}, [setValue])

	const onSubmit = (data) => {
		fetch(
			`https://testifyio.herokuapp.com/users/${user.id}`,
			{
				method: "put",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify(data),
			},
			setLoading(true)
		)
			.then(function (response) {
				return response.json()
			})
			.then(function (data) {
				console.log(data)
				setLoading(false)
				if (data.status === 200) {
					router.push(`/${data.username}`)
				}
				setTimeout(function () {
					setSuccessMessage("")
				}, 10000)
			})
	}

	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<Head>
				<title>Settings</title>
			</Head>
			{/*  */}
			<div className="container">
				<Link href="/[username]" as={`/tom.holland`}>
					<a>
						<h1 className="text-center">
							<b>Nextrap</b>
						</h1>
					</a>
				</Link>
				<h3 className="text-center text-primary">Settings</h3>
				<div className="row">
					<form
						className="col-12 col-sm-10 col-md-6 col-lg-5 mx-auto"
						onSubmit={handleSubmit(onSubmit)}
					>
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
								name="username"
								type="text"
								className={`form-control ${errors.username && `is-invalid`}`}
								//aria-describedby="emailHelp"
								placeholder="Enter username"
								ref={register}
							/>
							{errors.username && (
								<small id="username" className="form-text text-danger">
									{errors.username.message}
								</small>
							)}
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
						<button type="submit" className="btn btn-primary btn-block">
							SAVE →
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

Settings.getInitialProps = async (ctx) => {
	if (ctx.req !== undefined) {
		let token = ctx.req.headers.cookie?.replace("_SESSIONID_=", "")
		const res = await fetch("https://testifyio.herokuapp.com/users/me", {
			method: "get",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				Authorization: `Bearer ${token}`,
			},
		})
		const data = await res.json()
		return { info: data }
	} else {
		return { info: undefined }
	}
}

export default withCookies(Settings)
