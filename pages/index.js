import Head from "next/head"
import Navbar from "../organisms/Navbar"

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome | Nextrap</title>
				<meta name="title" content="Welcome | Nextrap" />
				<meta
					name="description"
					content="A simple Nextjs app boilerplate with steroid packages to boost your productivity and helps you quick started your project"
				/>
			</Head>

			<Navbar />

			<main className="container">
				<div className="row justify-content-center py-5">
					<div className="col-md-6">
						<h1 className="text-center">
							<b>
								Welcome to
								<a
									className="text-primary"
									href="https://github.com/ekimkael/nextrap"
								>
									{" "}
									Nextrap.
								</a>
							</b>
						</h1>

						<p className="lead text-muted text-center">
							A simple Nextjs app boilerplate with steroid packages to boost
							your productivity and helps you quick started your project.
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
