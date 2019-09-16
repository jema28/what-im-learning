import React from 'react'
import styled from 'styled-components'
import { Link } from '../elements'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const NavLink = styled(props => <Link {...props} />)`
  margin-top: 50px;
  margin-right: 25px;
  &:last-child {
    margin-right: 100px;
  }
`

const Navbar = () => (
  <Nav>
    <NavLink>portfolio</NavLink>
    <NavLink>book tracker</NavLink>
  </Nav>
)

export default Navbar
