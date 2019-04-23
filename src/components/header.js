import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { black, gray, gray_dark, gray_dark_2 } from '../utilities'

const NavItem_Link = styled(props => (
  <Link activeClassName="active" {...props} />
))`
  color: ${gray};
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;

  &:hover {
    color: ${gray_dark};
  }

  &.active {
    color: ${gray_dark_2};
  }
`

const Title_Link = styled(props => <Link {...props} />)`
  color: ${black};
  font-size: 3rem;
  text-decoration: none;
`

const Styled_header = styled.header`
  padding: 1rem 0 3rem;
`
const Nav_ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const Header = () => {
  return (
    <Styled_header>
      <h1>
        <Title_Link to="/">Joe Astuccio</Title_Link>
      </h1>
      <nav>
        <Nav_ul>
          <li>
            <NavItem_Link to="/">Home</NavItem_Link>
          </li>
          <li>
            <NavItem_Link to="/blog/">Blog</NavItem_Link>
          </li>
          <li>
            <NavItem_Link to="/about/">About</NavItem_Link>
          </li>
          <li>
            <NavItem_Link to="/contact/">Contact</NavItem_Link>
          </li>
        </Nav_ul>
      </nav>
    </Styled_header>
  )
}

export default Header
