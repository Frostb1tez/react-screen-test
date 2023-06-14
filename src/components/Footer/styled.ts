import { styled } from 'styled-components'
import Image from '../Image'

export const FixedFooter = styled.footer`
  z-index: 100;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 120px;
  @media (max-width: 768px) {
    height: auto;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 80px;
  height: 100%;
  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: flex-start;
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const FooterMenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 0;
  }
`

export const FooterMenuItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-inline-start: 0;
    margin-block: 0;
  }
`

export const FooterMenuItemListItem = styled.li`
  display: flex;
  margin: 0 20px;
  @media (max-width: 768px) {
    margin: 3px 0;
  }
`

export const FooterMenuCta = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`
export const FooterSocialImage = styled(Image)`
  width: 60px;
  height: 60px;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
