import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H1 } from '../elements'
import { color, splitTitle } from '../../utils'

const { secondary } = color

const Title = styled.span`
  color: ${secondary.medium};
`

const SubTitle = styled.span`
  color: ${secondary.darkest};
`

const Header = ({ pageTitle }) => {
  const { title, subtitle } = splitTitle(pageTitle)

  return (
    <header>
      <H1>
        <SubTitle>{subtitle}</SubTitle> <Title>{title}</Title>
      </H1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: ``
}

export default Header
