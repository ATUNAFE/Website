import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Not found" />
		<Container
			fluid
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh", textAlign: "center" }}
		>
			<Row>
				<Col>
					<h1>Not Found</h1>
					<p>{`You just hit a route that doesn't exist... the sadness.`}</p>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default NotFoundPage;
