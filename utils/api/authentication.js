export async function registerAPI() {
	await fetch("http://localhost:1337/auth/local/register")
}
