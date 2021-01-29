import React from "react"
import Link from "next/link"

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link href="/">
					<a className="navbar-brand">
						<b className="text-secondary">Nextrap.</b>
					</a>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link href="/about">
								<a className="nav-link">About</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/contact">
								<a className="nav-link">Contact</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/terms">
								<a className="nav-link">Terms</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/privacy">
								<a className="nav-link">Privacy</a>
							</Link>
						</li>
					</ul>
				</div>

				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link href="/login">
								<a className="nav-link">Login</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/register">
								<a className="btn btn-outline-secondary">Get Started</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
