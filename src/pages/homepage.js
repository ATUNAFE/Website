import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import CustomImage from "../components/images/image"
import SingleImageCarousel from "../components/carousels/single-image-carousel"
import NextEvents from "../components/homepage/next-events";
import PhotoAlbum from "../components/homepage/photo-album";
import HeroSection from "../components/homepage/hero-section";
import FollowUsSection from "../components/homepage/follow-us-section";

export const homepageQuery = graphql`
  query homepageQuery {
    homepage: markdownRemark(frontmatter: { fileName: { eq: "homepage" } }) {
      frontmatter {
        title
        description
        background {
          color
          image {
            src
            alt
          }
        }
        carousel {
          src
          alt
        }
        nextEvents {
          name
		  date
		  local
		  organization
		  image {
		  	src
			alt
		  }
        }
      }
    }
  }
`

const Homepage = () => {
	const { homepage } = useStaticQuery(homepageQuery)

	return (
		<Layout>
			<Seo title="Home" />
			
			{/* <HeroSection
				title={homepage.frontmatter.title}
				description={homepage.frontmatter.description}
				backgroundImage={homepage.frontmatter.background.image}
			/>

			<div>
				<FollowUsSection />
			</div>

			<div>
				<PhotoAlbum 
					carousel={homepage.frontmatter.carousel}
				/>
			</div>

			<div>
				<NextEvents
					events={homepage.frontmatter.nextEvents}
				/>
			</div> */}
		</Layout>
	)
}

export default Homepage
