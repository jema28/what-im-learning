import React from 'react'
import styled from 'styled-components'
import { H3, H4, P } from '../elements'

const Article = styled.article`
  width: 612px;
  margin-bottom: 65px;
`

const Post = props => {
  console.log(props)
  return (
    <Article>
      <H4 modifiers="dark">07 Sep 19</H4>
      <H3 modifiers="white">I’m not sure what I should call this</H3>
      <P>
        Bespoke skateboard paleo meh, vinyl pour-over photo booth hexagon small
        batch occupy chia dreamcatcher beard asymmetrical adaptogen. Beard
        shoreditch you probably haven't heard of them artisan.
      </P>
    </Article>
  )
}

export default Post
