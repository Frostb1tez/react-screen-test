import styled from 'styled-components'
import Image from '../Image'

export const Navbar = styled.header`
  z-index: 100;
  position: sticky;
  top: 0;
  background-color: #fff;
`

export const NavbarContainer = styled.div`
  display: flex;
  padding: 16px 80px;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`

export const NavbarLogo = styled.div`
  display: flex;
  width: 15%;
  height: 40px;
  flex: none;
  @media (max-width: 768px) {
    width: 30%;
  }
`
export const NavbarLogoImg = styled(Image)``

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavbarMenuMobile = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  width: 50%;
  padding: 10px;
  background-color: #fff;
  z-index: 999;
  opacity: 0.8;
`

export const NavbarMenuItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0;
    margin: 0;
  }
`

export const NavbarMenuItemListItem = styled.li`
  display: flex;
  margin: 0 20px;
  &:hover {
    color: turquoise;
  }
  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`

export const NavbarMenuCta = styled.div`
  display: flex;
  width: 15%;
  flex: none;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavbarHamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`

export const NavbarMenuCtaButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 8px 16px;
  background-color: #fff;
  border: none;
`

export const NavbarProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
`

export const NavbarProfileDropdownIcon = styled(Image)`
  width: 20px;
  height: 20px;
`

export const HamburgerMenuIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 4px 0;
`
