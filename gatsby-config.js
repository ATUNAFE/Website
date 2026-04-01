module.exports = {
	siteMetadata: {
		title: `TUNAFE`,
		description: `Site oficial da TUNAFE`,
		author: `@TUNAFE`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,

		// Markdown files
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/_content/pages`,
			},
		},

		// Images (referenciadas nos markdowns)
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/_content/images`,
			},
		},

		// Transformer for Markdown
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							linkImagesToOriginal: false,
							withWebp: true,
						},
					},
				],
			},
		},

		// Image processing
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		// Manifest
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `_content/images/logos/tunafe.png`,
			},
		},

		// Other plugins
		`gatsby-adapter-netlify`,
		`gatsby-plugin-decap-cms`,
		// `gatsby-plugin-offline`,
	],
}
