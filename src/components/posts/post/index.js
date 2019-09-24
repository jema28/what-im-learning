import React from 'react'
import styled from 'styled-components'
import { H3, H4, P, Link } from '../../elements'
import { color } from '../../../utils'

const { secondary } = color

const Article = styled.article`
  width: 612px;
  margin-bottom: 65px;
`

const PostLink = styled(props => (
  <Link modifiers={['size_medium', 'white']} {...props} />
))`
  text-decoration-color: ${secondary.dark};
`

const Post = ({ slug, date, title, excerpt }) => {
  console.log(date, title, excerpt, slug)
  return (
    <Article>
      <H4 modifiers="dark">{date}</H4>
      <H3>
        <PostLink href={`posts${slug}`}>{title}</PostLink>
      </H3>
      <P>{excerpt}</P>
    </Article>
  )
}

export default Post
