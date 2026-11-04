import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CustomImage from "../images/image";

const SingleImageCarousel = ({
	images = [],
	withControls = true,
	withIndicators = true,
	autoPlay = false,
	interval = 6000,

	activeColor = "var(--dark-engineer)",
	inactiveColor = "var(--light-engineer)",
	arrowIconColor = "var(--light-neutral)",
	arrowBackgroundColor = "rgba(0, 0, 0, 0.35)",
	arrowBorderColor = "rgba(240, 240, 240, 0.25)",
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setActiveIndex(selectedIndex);
	};

	const goToPrevious = () =>
		setActiveIndex((activeIndex - 1 + images.length) % images.length);

	const goToNext = () =>
		setActiveIndex((activeIndex + 1) % images.length);

	if (!images.length) {
		return null;
	}

	const arrowStyle = {
		width: "2.5rem",
		height: "2.5rem",
		backgroundColor: arrowBackgroundColor,
		backdropFilter: "blur(6px)",
		color: arrowIconColor,
		border: `1px solid ${arrowBorderColor}`,
	};

	return (
		<div className="position-relative">
			<Carousel
				activeIndex={activeIndex}
				onSelect={handleSelect}
				interval={autoPlay ? interval : null}
				pause="hover"
				controls={false}
				indicators={false}
				touch
				keyboard
				wrap
				className="bg-transparent"
			>
				{images.map((image, index) => (
					<Carousel.Item key={image ?? index}>
						<div
							className="d-flex align-items-center justify-content-center bg-transparent"
							style={{
								height: "clamp(240px, 55vw, 600px)",
							}}
						>
							<CustomImage
								src={image}
								alt=""
								style={{
									width: "100%",
									height: "100%",
								}}
								imgStyle={{
									maxHeight: "100%",
									maxWidth: "100%",
									objectFit: "contain",
									margin: "auto",
								}}
							/>
						</div>
					</Carousel.Item>
				))}
			</Carousel>

			{withControls && images.length > 1 && (
				<>
					<button
						type="button"
						aria-label="Previous image"
						onClick={goToPrevious}
						className="btn btn-sm rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2 ms-md-3 d-inline-flex align-items-center justify-content-center"
						style={arrowStyle}
					>
						<FaChevronLeft />
					</button>

					<button
						type="button"
						aria-label="Next image"
						onClick={goToNext}
						className="btn btn-sm rounded-circle position-absolute top-50 end-0 translate-middle-y me-2 me-md-3 d-inline-flex align-items-center justify-content-center"
						style={arrowStyle}
					>
						<FaChevronRight />
					</button>
				</>
			)}

			{withIndicators && images.length > 1 && (
				<div
					className="position-absolute bottom-0 start-50 translate-middle-x d-flex align-items-center gap-2 p-2 rounded-pill"
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.35)",
						backdropFilter: "blur(6px)",
						marginBottom: "0.75rem",
					}}
				>
					{images.map((image, index) => {
						const isActive = activeIndex === index;

						return (
							<button
								key={image ?? index}
								type="button"
								aria-label={`Go to image ${index + 1}`}
								aria-current={isActive}
								onClick={() => setActiveIndex(index)}
								className="btn p-0 rounded-circle"
								style={{
									width: isActive ? "0.875rem" : "0.75rem",
									height: isActive ? "0.875rem" : "0.75rem",
									backgroundColor: isActive
										? activeColor
										: "transparent",
									border: `1px solid ${isActive ? activeColor : inactiveColor
										}`,
								}}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default SingleImageCarousel;