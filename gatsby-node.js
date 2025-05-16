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
            home: markdownRemark(frontmatter: {id: {eq: "page-home"}}) {
                frontmatter {
                    slug
                    components {
                        type
                        id
                    }
                }
            }
            aboutUs: markdownRemark(frontmatter: {id: {eq: "page-aboutUs"}}) {
                frontmatter {
                    slug
                    components {
                        type
                        id
                    }
                }
            }
            activeMembers: markdownRemark(frontmatter: {id: {eq: "page-activeMembers"}}) {
                frontmatter {
                    slug
                    components {
                        type
                        id
                    }
                }
            }
            inactiveMembers: markdownRemark(frontmatter: {id: {eq: "page-inactiveMembers"}}) {
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

    const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`);

    const { home, aboutUs, activeMembers, inactiveMembers } = result.data;

    createPage({
        path: home.frontmatter.slug,
        component: pageTemplate,
        context: {
            data: home
        },
    });

    createPage({
        path: aboutUs.frontmatter.slug,
        component: pageTemplate,
        context: {
            data: aboutUs
        },
    });

    createPage({
        path: activeMembers.frontmatter.slug,
        component: pageTemplate,
        context: {
            data: activeMembers
        },
    });

    createPage({
        path: inactiveMembers.frontmatter.slug,
        component: pageTemplate,
        context: {
            data: inactiveMembers
        },
    });
}
