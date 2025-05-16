/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// gatsby-node.js

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(
        `
        {
            markdownRemark(frontmatter: {id: {eq: "aboutUsPage"}}) {
                frontmatter {
                    slug
                    components {
                        type
                        id
                    }
                }
            }
        }
        `
    );

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const pageTemplate = path.resolve(`./src/templates/about-us.js`);

    createPage({
        path: result.data.markdownRemark.frontmatter.slug,
        component: pageTemplate,
        context: {
            data: result.data
        },
    });
}
