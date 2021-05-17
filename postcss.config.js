module.exports = {
	plugins:
		process.env.NODE_ENV === "production"
			? [
					"postcss-flexbugs-fixes",
					[
						"postcss-preset-env",
						{
							autoprefixer: {
								flexbox: "no-2009",
							},
							stage: 3,
							features: {
								"custom-properties": false,
							},
						},
					],
					[
						"@fullhuman/postcss-purgecss",
						{
							content: ["./pages/**/*.{js,jsx}", "./organisms/**/*.{js,jsx}"],
							defaultExtractor: (content) =>
								content.match(/[\w-/:]+(?<!:)/g) || [],
							safelist: ["html", "body"],
						},
					],
			  ]
			: [
					// No transformations in development
			  ],
}
