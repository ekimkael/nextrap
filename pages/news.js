function News({ news }) {
	return (
		<ul>
			{news.map((article) => (
				<li>
					<h3>{article.title}</h3>
					<p>{article.content}</p>
				</li>
			))}
		</ul>
	)
}

News.getInitialProps = async (ctx) => {
	const response = await fetch("http://localhost:1337/articles")
	const datas = await response.json()

	return { news: datas }
}

export default News
