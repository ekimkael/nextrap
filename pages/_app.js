import Head from "next/head"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
	const Template = Component.Template || EmptyTemplate
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<Template>
				<Component {...pageProps} />
			</Template>
		</>
	)
}

export default MyApp
const EmptyTemplate = ({ children }) => <>{children}</>
