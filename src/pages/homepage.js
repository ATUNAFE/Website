import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import CustomImage from "../components/images/image"
import SingleImageCarousel from "../components/carousels/single-image-carousel"

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
			<div
				style={{
					position: "relative",
					height: "100vh",
					overflow: "hidden",
					width: "100%",
				}}
			>
				<CustomImage
					src={homepage.frontmatter.background.image.src}
					alt={homepage.frontmatter.background.image.alt}
					style={{ height: "100%", width: "100%" }}
					imgStyle={{
						objectFit: "cover",
						objectPosition: "50% 15%", // ou "50% 20%" para mais controlo
						height: "100%",
						width: "100%",
					}}
				/>

				{/* Top Line */}
				<div
					className="position-absolute start-50 translate-middle-x"
					style={{
						top: "135px",
						width: "90%",
						height: "4px",
						backgroundColor: "var(--light-engineer)",
					}}
				/>

				{/* Bottom Line */}
				<div
					className="position-absolute start-50 translate-middle-x"
					style={{
						bottom: "60px",
						width: "90%",
						height: "4px",
						backgroundColor: "var(--dark-green)",
					}}
				/>

				<div
					className="position-absolute w-100"
					style={{
						top: "50%",
						transform: "translateY(-50%)",
						padding: "0 20px",
					}}
				>
					<Container>
						<Row className="text-light" style={{ minHeight: "300px" }}>
							<Col
								xs={10}
								md={8}
								className="d-flex flex-column justify-content-start text-md-start text-center"
							>
								<h1
									style={{
										fontWeight: "bold",
										color: "var(--light-neutral)",
										marginBottom: "1rem",
									}}
								>
									{homepage.frontmatter.title}
								</h1>
							</Col>

							<Col
								xs={8}
								md={4}
								className="d-flex flex-column text-md-start text-center"
								style={{ marginTop: "auto" }} // empurra mais para baixo dentro da row
							>
								<p
									style={{
										color: "var(--dark-neutral)",
										textAlign: "justify",
										maxWidth: "90%",
										marginBottom: "0.5rem",
									}}
								>
									{homepage.frontmatter.description}
								</p>
								<p
									className="mt-4"
									style={{
										color: "var(--dark-neutral)",
										fontWeight: "bold",
									}}
								>
									Sabe mais{" "}
									<a
										href="/about-us"
										style={{
											color: "var(--light-green)",
											textDecoration: "none",
											fontWeight: "bold",
										}}
										onMouseEnter={e =>
											(e.target.style.textDecoration = "underline")
										}
										onMouseLeave={e => (e.target.style.textDecoration = "none")}
									>
										sobre nós!
									</a>
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>

			<Container
				fluid
				className="d-flex justify-content-center align-items-center py-5"
				style={{
					backgroundColor: "var(--light-engineer)",
					color: "var(--light-neutral)",
				}}
			>
				<Row className="w-100 align-items-center justify-content-center">
					<Col
						xs="auto"
						className="d-flex align-items-center justify-content-center"
					>
						<h4 className="mb-0">
							Queres juntar-te a nós? Aparece num dos nossos{" "}
							<a
								href="/about-us#ensaios"
								style={{
									color: "var(--light-green)",
									textDecoration: "none",
									fontWeight: "bold",
								}}
								onMouseEnter={e =>
									(e.target.style.textDecoration = "underline")
								}
								onMouseLeave={e => (e.target.style.textDecoration = "none")}
							>
								ensaios.
							</a>
						</h4>
					</Col>
				</Row>
			</Container>

			<Container
				fluid
				style={{
					backgroundColor: "var(--dark-neutral)",
					color: "var(--light-neutral)",
				}}
			>
				<Row className="py-5">
					<SingleImageCarousel
						images={homepage.frontmatter.carousel}
						withControls={true}
						withIndicators={true}
						invertedColors={true}
					/>
				</Row>
				<Row
					className="w-100 align-items-center justify-content-center pb-5"
					style={{
						color: "var(--dark-engineer)",
					}}
				>
					<Col
						xs="auto"
						className="d-flex align-items-center justify-content-center"
					>
						{/* TODO: Adicionar link para página do facebook com albums */}
						<h4>Acompanha-nos!</h4>
					</Col>
				</Row>
			</Container>

			<Container
				className="py-5"
				fluid
				style={{
					backgroundColor: "var(--light-neutral)",
				}}
			>
				<Row className="py-4" style={{ position: "relative", zIndex: 2 }}>
					<h3>Próximos Eventos</h3>
				</Row>

				<Row className="pt-4">
					{homepage.frontmatter.nextEvents.map((event, index) => (
						<Col
							key={index}
							xs={6}
							md={4}
							className="d-flex flex-column align-items-center justify-content-start text-center"
						>
							<CustomImage
								src={event.image.src}
								alt={event.image.alt}
								style={{ width: "50%" }}
							/>
							<div className="mt-3">
								<h5>{event.name}</h5>
								<p className="mb-0">{event.date}</p>
								<p className="mb-0">{event.local}</p>
								<p>{event.organization}</p>
							</div>
						</Col>
					))}
				</Row>

				<Row
					className="w-100 align-items-center justify-content-center pt-5"
				>
					<Col
						xs="auto"
						className="d-flex align-items-center justify-content-center"
					>
						<h4 className="mb-0">
							Descobre mais{" "}
							<a
								href="/events"
								style={{
									color: "var(--light-green)",
									textDecoration: "none",
									fontWeight: "bold",
								}}
								onMouseEnter={e =>
									(e.target.style.textDecoration = "underline")
								}
								onMouseLeave={e => (e.target.style.textDecoration = "none")}
							>
								eventos!
							</a>
						</h4>
					</Col>
				</Row>

			</Container>
		</Layout>
	)
}

export default Homepage
