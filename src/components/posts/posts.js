import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Feature, Post } from './index'

const PostsWrapper = styled.section`
  margin-left: 258px;
  margin-top: 30px;
`

const PostsSection = styled.section`
  margin-top: 700px;
`

export const postsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query postsQuery {
        allMarkdownRemark(
          limit: 10
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                slug
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

const Posts = () => {
  const postList = postsQuery()
  return (
    <PostsWrapper>
      <Feature />
      <PostsSection>
        {postList.map(
          ({
            node: {
              excerpt,
              frontmatter: { title, slug, date }
            }
          }) => (
            <Post key={slug} title={title} date={date} excerpt={excerpt} />
          )
        )}
      </PostsSection>
    </PostsWrapper>
  )
}

export default Posts
