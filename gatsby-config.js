module.exports = {
    siteMetadata: {
        title: `TUNAFE`,
        description: `Site oficial da TUNAFE – Tuna Feminina de Engenharia da Universidade do Porto (FEUP). Conhece a história, os membros, a discografia, o repertório e os eventos da tuna.`,
        author: `@tunafe`,
        siteUrl: `https://tunafe.netlify.app`,
        locale: `pt_PT`,
        keywords: [
            "TUNAFE",
            "Tuna Feminina de Engenharia da Universidade do Porto",
            "FEUP tuna",
            "tuna académica Porto",
            "tuna feminina universitária",
            "tuna universitária Porto",
            "música académica portuguesa",
        ],
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
                name: `TUNAFE - Tuna Feminina de Engenharia da Universidade do Porto`,
                short_name: `TUNAFE`,
                start_url: `/`,
                background_color: `#2A2A2A`,
                theme_color: `#00893B`,
                display: `minimal-ui`,
                icon: `_content/images/logos/tunafe.png`,
                lang: `pt`,
            },
        },

        // Other plugins
        `gatsby-adapter-netlify`,
        `gatsby-plugin-decap-cms`,
        // SEO/sitemap handled in gatsby-node onPostBuild + static/robots.txt (avoids plugin install in container)
        // `gatsby-plugin-offline`,
    ],
};
