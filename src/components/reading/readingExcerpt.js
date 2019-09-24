import React from 'react'
import styled from 'styled-components'
import { H2 } from '../elements'
import { color } from '../../utils'
import cover1 from '../../images/women_who_run_with_the_wolves.png'
import cover2 from '../../images/night_circus.png'
import cover3 from '../../images/no_mud_no_lotus.png'

const { background } = color

const Background = styled.section`
  background: ${background.dark};
  height: 729px;
  padding-top: 50px;
`

const Excerpt = styled.aside`
  margin-left: 258px;
`

const BookCovers = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 24px;
`

const BookCover1 = styled.div`
  background: url(${cover1});
  width: 292px;
  height: 445px;
  mix-blend-mode: screen;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin-right: 35px;
`

const BookCover2 = styled.div`
  background: url(${cover2});
  width: 296px;
  height: 430px;
  mix-blend-mode: luminosity;
  margin-right: 35px;
`

const BookCover3 = styled.div`
  background: url(${cover3});
  width: 289px;
  height: 430px;
  mix-blend-mode: screen;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`

const ReadingExcerpt = () => (
  <Background>
    <Excerpt>
      <H2 modifiers="light">what i'm reading right now</H2>
      <BookCovers>
        <BookCover1 />
        <BookCover2 />
        <BookCover3 />
      </BookCovers>
    </Excerpt>
  </Background>
)

export default ReadingExcerpt
