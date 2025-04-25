import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../images/logos/tunafe.png";
import background from "../images/IMG_4101.jpg";
import iconTunafe from "../images/Instrumentos/Magister.png";
import Banner from "../components/banner";
import History from "../components/about-us/history";
import AllMembers from "../components/about-us/all-members";
import Godparents from "../components/about-us/godparents";
import TIET from "../components/about-us/tiet";
import Rehearsals from "../components/about-us/rehearsals";

export const aboutUsQuery = graphql`
    query AboutUsQuery {
		history: markdownRemark(frontmatter: {fileName: {eq: "historial"}}) {
			html
			frontmatter {
				title
				citation {
					text
					author
				}
			}
		}
		allMembers: markdownRemark(frontmatter: {fileName: {eq: "todosMembros"}}) {
			html
		}
		godparents: markdownRemark(frontmatter: {fileName: {eq: "padrinhos"}}) {
			html
		}
		tiet: markdownRemark(frontmatter: {fileName: {eq: "tiet"}}) {
			html
		}
		rehearsals: markdownRemark(frontmatter: {fileName: {eq: "ensaios"}}) {
			html
			frontmatter {
				weekDays
				rehearsalRoom
				tunaRoom
				startTime
				finishTime
			}
		}
	}
`;

const AboutUs = () => {
	const { history, allMembers, godparents, tiet, rehearsals } = useStaticQuery(aboutUsQuery);
	console.log("[HISTORY] history:");
	console.log(history);
	return (
		<Layout>
			<Banner
				title="Sobre Nós"
				subtitle={"some"}
				icon={iconTunafe}
				backgroundImage={background}
				backgroundColor="var(--light-green)"
			/>

			<div className="py-4" style={{ backgroundColor: "var(--light-neutral)" }}>
				<History
					title={history.frontmatter.title}
					citation={history.frontmatter.citation}
					html={history.html} 
				/>
			</div>

			<div className="py-4" style={{ backgroundColor: "var(--dark-neutral)" }}>
				<AllMembers html={allMembers.html} />
			</div>

			<div className="py-4" style={{ backgroundColor: "var(--light-neutral)" }}>
				<Godparents html={godparents.html} />
			</div>

			<div className="py-4" style={{ backgroundColor: "var(--dark-neutral)" }}>
				<TIET html={tiet.html} />
			</div>

			<div className="py-4" style={{ backgroundColor: "var(--light-neutral)" }}>
				<Rehearsals
					weekDays={rehearsals.frontmatter.weekDays}
					rehearsalRoom={rehearsals.frontmatter.rehearsalRoom}
					tunaRoom={rehearsals.frontmatter.tunaRoom}
					startTime={rehearsals.frontmatter.startTime}
					finishTime={rehearsals.frontmatter.finishTime}
					html={rehearsals.html}
				/>
			</div>

			{/* <Seo title="AboutUs" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>

        <section className="Historial">

        <div>
            <h2>Historial</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, paddingRight: '20px'}}>
            <img style={{ width: '100%', height: 'auto' }} src={logo} />
            </div>
            <div style={{ flex: 2 }} dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        </section> */}
		</Layout>
	);
}

export default AboutUs;