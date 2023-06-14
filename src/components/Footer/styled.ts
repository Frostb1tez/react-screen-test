import { styled } from 'styled-components'
import Image from '../Image'

export const FixedFooter = styled.footer`
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 120px;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 100%;
`
export const FooterLogo = styled.div`
  display: flex;
  width: 15%;
  height: 80px;
  flex: none;
`
export const FooterLogoImg = styled(Image)``

export const FooterMenu = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`
export const FooterMenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`

export const FooterMenuItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterMenuItemListItem = styled.li`
  display: flex;
  margin: 0 20px;
`

export const FooterMenuCta = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`
export const FooterSocialImage = styled(Image)`
  width: 60px;
  height: 60px;
  margin-right: 30px;
`
