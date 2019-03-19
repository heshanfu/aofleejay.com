import React from 'react'
import { Link, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout>
    <SEO />
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3 style={{ marginBottom: rhythm(1 / 4) }}>
            {node.frontmatter.title}{" "}
            <span style={{ color: '#bbb' }}>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
    {data.allMediumPost.edges.map(({ node }) => (
      <div key={node.id}>
        <a
          href={`https://medium.com/@aofleejay/${node.uniqueSlug}`}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3 style={{ marginBottom: rhythm(1 / 4) }}>
            {node.title}{" "}
            <span style={{ color: '#bbb' }}>
              — {node.createdAt}
            </span>
          </h3>
          <p>{node.virtuals.subtitle}</p>
        </a>
      </div>
    ))}
  </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          createdAt(formatString: "DD MMMM, YYYY")
          type
          author {
            username
          }
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`

export default IndexPage
