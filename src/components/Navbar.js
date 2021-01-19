import { StyledNav, StyledNavLink } from '../styled.components/styled'

export default function Navbar() {
  return (
    <StyledNav className='navbar'>
      <StyledNavLink exact to={'/'}>
        Heroes
      </StyledNavLink>
      <StyledNavLink to={'/about'}>About</StyledNavLink>
    </StyledNav>
  )
}
