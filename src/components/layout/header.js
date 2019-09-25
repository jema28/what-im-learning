import React from 'react'
import PropTypes from 'prop-types'
import { H1, Span } from '../elements'
import { splitTitle } from '../../utils'

const Header = ({ pageTitle }) => {
  const { title, subtitle } = splitTitle(pageTitle)

  return (
    <header>
      <H1>
        <Span modifiers="darkest">{subtitle}</Span>{' '}
        <Span modifiers="medium">{title}</Span>
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
