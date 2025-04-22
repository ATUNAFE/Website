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
	}
`;

const InactiveMembers = () => {
    const { fundadoras } = useStaticQuery(inactiveMembers);
	
	const sections = [
		{
			collapsible: true,
			members: formatMembers(fundadoras.nodes),
			title: "Fundadoras"
		}
	];

	return (
		<Members subtitle="Sempre Tunafas" sections={sections} />
	);
};

export default InactiveMembers;