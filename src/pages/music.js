// import React from "react";
// import { graphql, useStaticQuery, Link } from "gatsby";

// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import Banner from "../components/banner";

// const musicQuery = graphql`
// query MusicQuery {
//   music: markdownRemark(frontmatter: {fileName: {eq: "musica"}}) {
//     frontmatter {
//       title
//       background {
//         color
//         image {
//           src
//           alt
//         }
//       }
// 		icon {
//           src
//           alt
//         }
//       subtitles {
//         text
//         anchor
//         icon {
//           src
//           alt
//         }
//       }
//     }
//   }
//   discography: markdownRemark(frontmatter: {fileName: {eq: "discografia"}}) {
//     id
//   }
// }
// `;

// const Music = () => {
// 	const { music } = useStaticQuery(musicQuery); 
// 	console.log(music);

// 	return (
// 		<Layout>
// 			<Banner
// 				title={music.frontmatter.title}
// 				subtitles={music.frontmatter.subtitles}
// 				icon={music.frontmatter.icon}
// 				backgroundImage={music.frontmatter.background.image}
// 				backgroundColor={music.frontmatter.background.color}
// 			/>

// 			<Seo title="Page two" />
// 			<h1>Hi from the second page</h1>
// 			<p>Welcome to page 2</p>
// 			<Link to="/">Go back to the homepage</Link>
// 		</Layout>
// 	);
// }

// export default Music;
