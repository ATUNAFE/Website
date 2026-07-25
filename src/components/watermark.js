import React, { useLayoutEffect, useRef, useState } from "react";
import CustomImage from "./images/image";

const Watermark = ({
    src,
    widthRatio = 0.4,
    heightRatio = 0.8,
    opacity = 0.06
}) => {
    const ref = useRef(null);
    const [size, setSize] = useState(null);

    useLayoutEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const observer = new ResizeObserver(() => {
            if (size) return; // freeze once

            const width = element.offsetWidth;
            const height = element.offsetHeight;

            setSize({
                width: Math.min(width * widthRatio, height * heightRatio),
            });
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, [size, widthRatio, heightRatio]);

    return (
        <div
            ref={ref}
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 0
            }}
        >
            {size && (
                <CustomImage
                    plain
                    src={src}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: `${size.width}px`,
                        height: `${size.width}px`,
                        opacity,
                        filter: "grayscale(100%)"
                    }}
                />
            )}
        </div>
    );
};

export default Watermark;
