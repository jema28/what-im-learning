import React from 'react'
import { GlobalStyle } from '../../utils/global'
import PropTypes from 'prop-types'
import { Header } from './index'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header pageTitle="what i'm learning" />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
