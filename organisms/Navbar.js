import React from "react"
import Link from "next/link"

function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<Link href="/">
				<a class="navbar-brand">Nextrap</a>
			</Link>

			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<Link href="/contact">
							<a class="nav-link">Contact</a>
						</Link>
					</li>
					<li class="nav-item">
						<Link href="/about">
							<a class="nav-link">About</a>
						</Link>
					</li>
					<li class="nav-item">
						<Link href="/terms">
							<a class="nav-link">Terms</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
