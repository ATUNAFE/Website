import React, { useRef, useState, useCallback } from "react";
import CustomImage from "../images/image";

const MultiImageCarousel = ({ images, autoScroll = true }) => {
    const trackRef = useRef(null);
    const [paused, setPaused] = useState(false);

    const pause = useCallback(() => setPaused(true), []);
    const resume = useCallback(() => setPaused(false), []);

    if (!images?.length) return null;

    const canScroll = autoScroll && images.length > 1;
    const loopImages = canScroll ? [...images, ...images] : images;
    const duration = Math.max(18, images.length * 6);

    return (
        <div
            className="photo-strip"
            role="region"
            aria-label="Galeria de fotografias"
            style={{
                overflowX: "auto",
                overflowY: "hidden",
                width: "100%",
                maxWidth: "100%",
                padding: "0.125rem 0 0.5rem",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
            }}
        >
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                ref={trackRef}
                className={canScroll ? "photo-strip-track" : undefined}
                onMouseEnter={pause}
                onMouseLeave={resume}
                onFocusCapture={pause}
                onBlurCapture={() => window.setTimeout(resume, 300)}
                onTouchStart={pause}
                onTouchEnd={() => window.setTimeout(resume, 1500)}
                style={{
                    display: "flex",
                    gap: "0.75rem",
                    width: "max-content",
                    ...(canScroll
                        ? {
                              animationDuration: `${duration}s`,
                              animationPlayState: paused ? "paused" : "running",
                          }
                        : {}),
                }}
            >
                {loopImages.map((image, i) => (
                    <div
                        key={`${image}-${i}`}
                        aria-hidden={i >= images.length ? "true" : undefined}
                        style={{
                            flex: "0 0 auto",
                            width: "clamp(200px, 32vw, 300px)",
                            height: "clamp(200px, 24vw, 260px)",
                            borderRadius: "8px",
                            overflow: "hidden",
                        }}
                    >
                        <CustomImage
                            src={image}
                            loading={i < images.length ? "eager" : "lazy"}
                            sizes="(min-width: 768px) 32vw, 200px"
                            style={{ width: "100%", height: "100%" }}
                            imgStyle={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiImageCarousel;
