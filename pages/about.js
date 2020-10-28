import Head from "next/head"
import Navbar from "../organisms/Navbar"

export default function About() {
	return (
		<>
			<Head>
				<title>About | Nextrap</title>
			</Head>

			<Navbar />

			<div className="col-md-8 mx-auto py-5">
				<h1>Team and Story</h1>
				<p className="text-muted lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus
					faucibus scelerisque eleifend donec pretium. Lacus luctus accumsan
					tortor posuere ac. Nulla facilisi nullam vehicula ipsum a arcu cursus.
					Euismod in pellentesque massa placerat duis ultricies. Dolor sit amet
					consectetur adipiscing. Nulla facilisi cras fermentum odio eu feugiat
					pretium nibh. Turpis tincidunt id aliquet risus feugiat in ante metus.
					Tortor pretium viverra suspendisse potenti nullam ac tortor. Tellus
					mauris a diam maecenas sed enim ut sem viverra. Sed turpis tincidunt
					id aliquet risus feugiat in ante. Ultrices dui sapien eget mi proin
					sed. Donec massa sapien faucibus et molestie ac feugiat sed. Elementum
					integer enim neque volutpat ac tincidunt vitae semper quis. Nam
					aliquam sem et tortor consequat. Convallis tellus id interdum velit
					laoreet
				</p>
			</div>
		</>
	)
}
