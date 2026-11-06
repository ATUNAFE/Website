/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// gatsby-node.js

const fs = require("fs");
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(
        `
            {
                home: markdownRemark(frontmatter: { id: { eq: "page-home" } }) {
                    frontmatter {
                        slug
                        components {
                            type
                            id
                        }
                    }
                }
                aboutUs: markdownRemark(
                    frontmatter: { id: { eq: "page-aboutUs" } }
                ) {
                    frontmatter {
                        slug
                        components {
                            type
                            id
                        }
                    }
                }
                activeMembers: markdownRemark(
                    frontmatter: { id: { eq: "page-activeMembers" } }
                ) {
                    frontmatter {
                        slug
                        components {
                            type
                            id
                        }
                    }
                }
                inactiveMembers: markdownRemark(
                    frontmatter: { id: { eq: "page-inactiveMembers" } }
                ) {
                    frontmatter {
                        slug
                        components {
                            type
                            id
                        }
                    }
                }
                music: markdownRemark(
                    frontmatter: { id: { eq: "page-music" } }
                ) {
                    frontmatter {
                        slug
                        components {
                            type
                            id
                        }
                    }
                }
                tiet: markdownRemark(frontmatter: { id: { eq: "page-tiet" } }) {
                    frontmatter {
                        slug
                        components {
                            type
                            id
                        }
                    }
                }
                events: markdownRemark(
                    frontmatter: { id: { eq: "page-events" } }
                ) {
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

    const {
        home,
        aboutUs,
        activeMembers,
        inactiveMembers,
        music,
        tiet,
        events,
    } = result.data;

    if (!home?.frontmatter) {
        reporter.panicOnBuild(
            'Página "page-home" não encontrada. Verifica _content/pages/homepage/index.md (id: "page-home").'
        );
        return;
    }

    const slugToPath = slug => {
        if (!slug || slug === "/") return "/";
        return `/${String(slug).replace(/^\/+|\/+$/g, "")}/`;
    };

    const create = (data, extra = {}) => {
        if (!data?.frontmatter?.slug) return;
        createPage({
            path: slugToPath(data.frontmatter.slug),
            component: pageTemplate,
            context: {
                data,
                ...extra,
            },
        });
    };

    create(home, {
        seo: {
            title: "TUNAFE | Tuna Feminina de Engenharia da Universidade do Porto",
            description:
                "Site oficial da TUNAFE, a Tuna Feminina de Engenharia da Universidade do Porto (FEUP). Conhece a história, os eventos, a música e a Tuna.",
            pathname: "/",
        },
    });
    create(aboutUs, {
        seo: {
            title: "Sobre Nós",
            description:
                "Conhece a TUNAFE, Tuna Feminina de Engenharia da Universidade do Porto: historial, membros, padrinhos, ensaios e o Tudo Isto É Tuna.",
            pathname: "/sobre-nos/",
        },
    });
    create(activeMembers, {
        seo: {
            title: "Membros",
            description:
                "Conhece as atuais tunas, caloiras e mestres-tunas da TUNAFE, Tuna Feminina de Engenharia da Universidade do Porto.",
            pathname: "/atualmente/",
        },
    });
    create(inactiveMembers, {
        seo: {
            title: "Sempre Tunafas",
            description:
                "As Sempre Tunafas da TUNAFE: fundadoras, antigas tunas e membros que marcaram a história da Tuna Feminina de Engenharia da Universidade do Porto.",
            pathname: "/sempre-tunafas/",
        },
    });
    create(music, {
        seo: {
            title: "Música",
            description:
                "Discografia e repertório da TUNAFE, Tuna Feminina de Engenharia da Universidade do Porto. Ouve os nossos trabalhos e explora as nossas canções.",
            pathname: "/musica/",
        },
    });
    create(tiet, {
        seo: {
            title: "Tudo Isto É Tuna",
            description:
                "Tudo Isto É Tuna (TIET): festival organizado pela TUNAFE. Consulta as edições, participantes, prémios e momentos do festival.",
            pathname: "/tudo-isto-e-tuna/",
        },
    });
    create(events, {
        seo: {
            title: "Eventos",
            description:
                "Eventos da TUNAFE, Tuna Feminina de Engenharia da Universidade do Porto. Fica a par das atuações e atividades da tuna.",
            pathname: "/eventos/",
        },
    });
};

exports.onPostBuild = async ({ graphql, reporter }) => {
    const result = await graphql(`
        {
            allSitePage(
                filter: { path: { nin: ["/dev-404-page/", "/404.html"] } }
            ) {
                nodes {
                    path
                }
            }
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `);

    if (result.errors) {
        reporter.warn(
            "Sitemap: GraphQL query failed; keeping static sitemap.",
            result.errors
        );
        return;
    }

    const siteUrl = (
        result.data.site?.siteMetadata?.siteUrl || "https://tunafe.netlify.app"
    ).replace(/\/$/, "");
    const paths = (result.data.allSitePage?.nodes || [])
        .map(n => n.path)
        .filter(
            p =>
                p &&
                p !== "/404/" &&
                !p.startsWith("/__") &&
                !p.includes("dev-404")
        );

    const normalize = p =>
        p === "/" ? "/" : `/${String(p).replace(/^\/+|\/+$/g, "")}/`;
    const unique = [...new Set(paths.map(normalize))].sort((a, b) =>
        a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)
    );

    const xml =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        unique.map(p => `  <url><loc>${siteUrl}${p}</loc></url>`).join("\n") +
        `\n</urlset>\n`;

    const out = path.join(process.cwd(), "public", "sitemap.xml");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, xml, "utf8");
    reporter.info(`Sitemap written: ${out} (${unique.length} URLs)`);
};
