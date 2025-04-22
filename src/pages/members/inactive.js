import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { formatMembers } from "../../utils/utils";
import Members from "../../components/members/members";

export const inactiveMembers = graphql`
	query InactiveMembersQuery {
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
    const { fundadoras, mestreTunas, tunas, caloiras } = useStaticQuery(inactiveMembers);
	
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
		<Members subtitle="Sempre Tunafas" sections={sections} />
	);
};

export default InactiveMembers;