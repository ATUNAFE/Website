import { graphql } from "gatsby";

export default function Template({ data }) {
    const { markdownRemark: post } = data;
    return (
        <div className="blog-post-container">
            <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  `;