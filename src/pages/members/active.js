import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { formatMembers } from "../../utils/utils";
import Members from "../../components/members/members";

export const activeMembersQuery = graphql`
	query ActiveMembersQuery {
		activeMembers: markdownRemark(frontmatter: {fileName: {eq: "membrosAtuais" } }) {
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
	const { activeMembers, magister, mestreTunas, tunas, caloiras } = useStaticQuery(activeMembersQuery);
	console.log("[activeMembers]");
	console.log(activeMembers);
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
		<Members
			title={activeMembers.frontmatter.title}
			subtitles={activeMembers.frontmatter.subtitles}
			icon={activeMembers.frontmatter.icon}
			backgroundImage={activeMembers.frontmatter.background.image}
			backgroundColor={activeMembers.frontmatter.background.color}
			sections={sections}
		/>
	);
}

export default ActiveMembers;



