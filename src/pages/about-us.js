import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import History from "../components/about-us/history"
import AllMembers from "../components/about-us/all-members"
import Godparents from "../components/about-us/godparents"
import TIET from "../components/about-us/tiet"
import Rehearsals from "../components/about-us/rehearsals"

export const aboutUsQuery = graphql`
  query AboutUsQuery {
  	aboutUs: markdownRemark(frontmatter: {fileName: {eq: "sobreNos" } }) {
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
    history: markdownRemark(frontmatter: { fileName: { eq: "historial" } }) {
      html
      frontmatter {
        title
        citation {
          text
          author
        }
        watermark {
          src
          alt
        }
        carousel {
          src
          alt
        }
        image {
          src
          alt
        }
      }
    }
    allMembers: markdownRemark(
      frontmatter: { fileName: { eq: "todosMembros" } }
    ) {
      html
      frontmatter {
        title
        watermark {
          src
          alt
        }
      }
    }
    godparents: markdownRemark(frontmatter: { fileName: { eq: "padrinhos" } }) {
      html
	  frontmatter {
        title
        image {
          src
          alt
        }
      }
    }
    tiet: markdownRemark(frontmatter: { fileName: { eq: "tiet" } }) {
      html
	  frontmatter {
        title
        image {
          src
          alt
        }
		watermark {
          src
          alt
        }
      }
    }
    rehearsals: markdownRemark(frontmatter: { fileName: { eq: "ensaios" } }) {
      html
      frontmatter {
	  	title
        weekDays
        rehearsalRoom
        tunaRoom
        startTime
        finishTime
		watermark {
          src
          alt
        }
      }
    }
  }
`

const AboutUs = () => {
	const { aboutUs, history, allMembers, godparents, tiet, rehearsals } = useStaticQuery(aboutUsQuery);

	return (
		<Layout>
			<Seo title={aboutUs.frontmatter.title} />
			<Banner
				title={aboutUs.frontmatter.title}
				subtitles={aboutUs.frontmatter.subtitles}
				icon={aboutUs.frontmatter.icon}
				backgroundImage={aboutUs.frontmatter.background.image}
				backgroundColor={aboutUs.frontmatter.background.color}
			/>

			<div className="d-flex flex-column">
				{/* History */}
				<div
					id="historial"
					className="section d-flex align-items-center justify-content-center py-5"
					style={{ backgroundColor: "var(--light-neutral)" }}
				>
					<History
						title={history.frontmatter.title}
						citation={history.frontmatter.citation}
						watermark={history.frontmatter.watermark}
						image={history.frontmatter.image}
						carousel={history.frontmatter.carousel}
						html={history.html}
					/>
				</div>

				{/* All Members */}
				<div
					id="membros"
					className="section d-flex align-items-center justify-content-center py-5"
					style={{ backgroundColor: "var(--dark-neutral)" }}
				>
					<AllMembers
						title={allMembers.frontmatter.title}
						watermark={allMembers.frontmatter.watermark}
						html={allMembers.html}
					/>
				</div>

				{/* Godparents */}
				<div
					id="padrinhos"
					className="section d-flex align-items-center justify-content-center py-5"
					style={{ backgroundColor: "var(--light-neutral)" }}
				>
					<Godparents
						title={godparents.frontmatter.title}
						image={godparents.frontmatter.image}
						html={godparents.html}
					/>
				</div>

				{/* TIET */}
				<div
					id="tiet"
					className="section d-flex align-items-center justify-content-center py-5"
					style={{ backgroundColor: "var(--dark-neutral)" }}
				>
					<TIET
						title={tiet.frontmatter.title}
						watermark={tiet.frontmatter.watermark}
						image={tiet.frontmatter.image}
						html={tiet.html}
					/>
				</div>

				{/* Rehearsals */}
				<div
					id="ensaios"
					className="section d-flex align-items-center justify-content-center py-5"
					style={{ backgroundColor: "var(--light-neutral)" }}
				>
					<Rehearsals
						title={rehearsals.frontmatter.title}
						watermark={rehearsals.frontmatter.watermark}
						weekDays={rehearsals.frontmatter.weekDays}
						rehearsalRoom={rehearsals.frontmatter.rehearsalRoom}
						tunaRoom={rehearsals.frontmatter.tunaRoom}
						startTime={rehearsals.frontmatter.startTime}
						finishTime={rehearsals.frontmatter.finishTime}
						html={rehearsals.html}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default AboutUs
