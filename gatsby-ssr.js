/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { ImageProvider } from "./src/components/images/image-context";

export const onRenderBody = ({
    setHtmlAttributes,
    setHeadComponents,
    setPreBodyComponents,
}) => {
    setHtmlAttributes({ lang: "pt" });
    setHeadComponents([
        <style
            key="critical-bg-loader"
            dangerouslySetInnerHTML={{
                __html: `html,body,#___gatsby,#gatsby-focus-wrapper{min-height:100%;margin:0;background:#f0f0f0;color:#2a2a2a}#tunafe-ssr-loader{position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:#f0f0f0}.tunafe-ssr-spinner{width:42px;height:42px;border:3px solid rgba(153,83,69,.2);border-top-color:#995345;border-radius:50%;animation:tunafe-ssr-spin .8s linear infinite}@keyframes tunafe-ssr-spin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){.tunafe-ssr-spinner{animation:none}}`,
            }}
        />,
        <link
            key="google-fonts-preconnect"
            href="https://fonts.googleapis.com"
            rel="preconnect"
        />,
        <link
            key="google-fonts-gstatic"
            href="https://fonts.gstatic.com"
            rel="preconnect"
            crossOrigin="anonymous"
        />,
        <link
            key="google-fonts"
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Source+Sans+Pro:wght@300;600&display=swap"
            rel="stylesheet"
        />,
    ]);
    setPreBodyComponents([
        <div
            key="tunafe-ssr-loader"
            id="tunafe-ssr-loader"
            role="status"
            aria-label="A carregar"
        >
            <div className="tunafe-ssr-spinner" aria-hidden="true" />
        </div>,
    ]);
};

export const wrapRootElement = ({ element }) => (
    <ImageProvider>{element}</ImageProvider>
);
