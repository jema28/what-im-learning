import React from 'react'
import styled from 'styled-components'
import { H2, H4, P, Button } from '../../elements'
import { color } from '../../../utils'

const { background } = color

const Background = styled.div`
  width: 595px;
  height: 493px;
  background: ${background.dark};
  position: absolute;
  left: 318px;
  top: 212px;
`

const Heading = styled.div`
  position: absolute;
  left: 258px;
  top: 258px;
  z-index: 1;
`

const Extract = styled(props => <P modifiers="size_small_medium" {...props} />)`
  width: 620px;
  margin-left: 100px;
`

const ReadMoreButton = styled(props => <Button {...props} />)`
  margin-top: 20px;
  margin-left: 100px;
`

const AllPostsButton = styled(props => <Button modifiers="dark" {...props} />)`
  margin-left: 20px;
`

const Feature = () => (
  <article>
    <Background />
    <Heading>
      <H4 modifiers="dark">07 Sep 19</H4>
      <H2 modifiers="white">Women who run with the wolves</H2>
      <Extract>
        Bespoke skateboard paleo meh, vinyl pour-over photo booth hexagon small
        batch occupy chia dreamcatcher beard asymmetrical adaptogen. Beard
        shoreditch you probably haven't heard of them artisan. Bespoke
        skateboard paleo meh, vinyl pour-over photo booth hexagon small batch
        occupy chia dreamcatcher beard.
      </Extract>
      <ReadMoreButton>read more</ReadMoreButton>
      <AllPostsButton>all posts</AllPostsButton>
    </Heading>
  </article>
)

export default Feature
