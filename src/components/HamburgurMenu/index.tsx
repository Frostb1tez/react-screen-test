import { HamburgerMenuContainer, HamburgerMenuLine } from './styled'
import { HamburgerMenuProps } from './type'

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <HamburgerMenuContainer onClick={onClick}>
      <HamburgerMenuLine isOpen={isOpen} />
      <HamburgerMenuLine isOpen={isOpen} />
      <HamburgerMenuLine isOpen={isOpen} />
    </HamburgerMenuContainer>
  )
}

export default HamburgerMenu
