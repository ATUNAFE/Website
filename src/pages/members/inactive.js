import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { formatMembers } from "../../utils/utils";
import Members from "../../components/members/members";

export const inactiveMembersQuery = graphql`
	query InactiveMembersQuery {
		inactiveMembers: markdownRemark(frontmatter: {fileName: {eq: "membrosAntigos" } }) {
			frontmatter {
				title
				background {
					color
					image {
						src
						alt
					}
				}
				icon {
					src
					alt
				}
				subtitles {
					text
					anchor
					icon {
						src
						alt
					}
				}
			}
		}
		fundadoras: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/sobre-nos/membros/antigas/fundadoras/"}}
		) {
			nodes {
				frontmatter {
					date
					name
					nameC
					course
					godmother
					instruments
					picture
				}
			}
		}
		mestreTunas: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/sobre-nos/membros/antigas/mestreTunas/"}}
			sort: { frontmatter: { date: ASC } }
		) {
			nodes {
				frontmatter {
					date
					name
					nameC
					course
					godmother
					instruments
					picture
				}
			}
		}
		tunas: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/sobre-nos/membros/antigas/tunas/"}}
			sort: { frontmatter: { date: ASC } }
		) {
			nodes {
				frontmatter {
					date
					name
					nameC
					course
					godmother
					instruments
					picture
				}
			}
		}
		caloiras: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/sobre-nos/membros/antigas/caloiras/"}}
			sort: { frontmatter: { date: ASC } }
		) {
			nodes {
				frontmatter {
					date
					name
					nameC
					course
					godmother
					instruments
					picture
				}
			}
		}
	}
`;

const InactiveMembers = () => {
    const { inactiveMembers, fundadoras, mestreTunas, tunas, caloiras } = useStaticQuery(inactiveMembersQuery);
	
	const sections = [
		{
			collapsible: true,
			members: formatMembers(fundadoras.nodes),
			title: "Fundadoras"
		},
		{
			collapsible: true,
			members: formatMembers(mestreTunas.nodes),
			title: "Mestre-Tunas"
		},
		{
			collapsible: true,
			members: formatMembers(tunas.nodes),
			title: "Tunas"
		},
		{
			collapsible: true,
			members: formatMembers(caloiras.nodes),
			title: "Caloiras"
		}
	];

	return (
		<Members
			title={inactiveMembers.frontmatter.title}
			subtitles={inactiveMembers.frontmatter.subtitles}
			icon={inactiveMembers.frontmatter.icon}
			backgroundImage={inactiveMembers.frontmatter.background.image}
			backgroundColor={inactiveMembers.frontmatter.background.color}
			sections={sections}
		/>
	);
};

export default InactiveMembers;