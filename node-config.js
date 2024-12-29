import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default function Posts({ data }) {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="blog-posts">
            {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                    return (
                        <div className="blog-post-preview" key={post.id}>
                            <h1>
                                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                            </h1>
                            <h2>{post.frontmatter.date}</h2>
                            <p>{post.excerpt}</p>
                        </div>
                    )
                })}
        </div>
    );
}