import {
  Navbar,
  NavbarContainer,
  NavbarLogo,
  NavbarLogoImg,
  NavbarMenu,
  NavbarMenuItemList,
  NavbarMenuItemListItem,
  NavbarMenuCta,
  NavbarMenuCtaButton,
  NavbarProfileImage,
  NavbarProfileDropdownIcon,
  NavbarHamburgerMenu,
  NavbarMenuMobile,
} from './styled'
import BrandLogo from '../../assets/logo-full.png'
import ProfileImage from '../../assets/profile.png'
import DropDownIcon from '../../assets/icons8-down-48.png'
import { useState } from 'react'
import HamburgerMenu from '../HamburgurMenu'

const navbarMenuItems = ['Explore Product', 'Product Design', 'Pricing']

const Header: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarLogo>
          <NavbarLogoImg src={BrandLogo} alt="logo-image" />
        </NavbarLogo>

        <NavbarMenu>
          <NavbarMenuItemList>
            {navbarMenuItems.map((navbarMenuItem) => (
              <NavbarMenuItemListItem key={navbarMenuItem}>{navbarMenuItem}</NavbarMenuItemListItem>
            ))}
          </NavbarMenuItemList>
        </NavbarMenu>

        <NavbarMenuCta>
          <NavbarMenuCtaButton>Logout</NavbarMenuCtaButton>
          <NavbarProfileImage src={ProfileImage} alt="profile-image" />
          <NavbarProfileDropdownIcon src={DropDownIcon} alt="profile-dropdown-icon" />
        </NavbarMenuCta>

        <NavbarHamburgerMenu>
          <HamburgerMenu isOpen={isMenuVisible} onClick={toggleMenu} />
          <NavbarMenuMobile isVisible={isMenuVisible}>
            <NavbarMenuItemList>
              {navbarMenuItems.map((navbarMenuItem) => (
                <NavbarMenuItemListItem key={navbarMenuItem}>
                  {navbarMenuItem}
                </NavbarMenuItemListItem>
              ))}
            </NavbarMenuItemList>
          </NavbarMenuMobile>
        </NavbarHamburgerMenu>
      </NavbarContainer>
    </Navbar>
  )
}

export default Header
