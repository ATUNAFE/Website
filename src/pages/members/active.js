import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { formatMembers } from "../../utils/utils";
import Members from "../../components/members/members";

export const activeMembersQuery = graphql`
	query ActiveMembersQuery {
		magister: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/magister/"}}
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
			filter: { fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/mestreTunas/" } }
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
			filter: { fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/tunas/" } }
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
			filter: { fileAbsolutePath: {regex: "/sobre-nos/membros/atuais/caloiras/" } }
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

const ActiveMembers = () => {
	const { magister, mestreTunas, tunas, caloiras } = useStaticQuery(activeMembersQuery);
	
	const sections = [
		{
			collapsible: true,
			members: formatMembers(magister.nodes),
			title: "Magister"
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
		},
		{
			collapsible: false,
			title: "Aprendizes..."
		}
	];

	return (
		<Members subtitle="Atualmente" sections={sections} />
	);
}

export default ActiveMembers;



