import {
  FooterContainer,
  FixedFooter,
  FooterLogo,
  FooterLogoImg,
  FooterMenu,
  FooterMenuItem,
  FooterMenuItemList,
  FooterMenuItemListItem,
  FooterMenuCta,
  FooterSocialImage,
} from './styled'
import FooterLogoAloneImage from '../../assets/logo-alone.png'
import FacebookImage from '../../assets/facebook-logo.png'
import TwitterImage from '../../assets/twitter-logo.png'
import InstagramImage from '../../assets/instagram-logo.png'
import YoutubeImage from '../../assets/youtube-logo.png'

const socialImages = [
  {
    src: FacebookImage,
    alt: 'facebook-logo',
  },
  {
    src: TwitterImage,
    alt: 'twitter-logo',
  },
  {
    src: InstagramImage,
    alt: 'instagram-logo',
  },
  {
    src: YoutubeImage,
    alt: 'youtube-logo',
  },
]

const footerMenuItems = ['Ornare', 'Accumsan', 'Mattis']

const Footer: React.FC = () => {
  return (
    <FixedFooter>
      <FooterContainer>
        <FooterLogo>
          <FooterLogoImg src={FooterLogoAloneImage} alt="footer-logo" />
        </FooterLogo>

        <FooterMenu>
          <FooterMenuItem>
            <FooterMenuItemList>
              {footerMenuItems.map((footerMenuItem) => (
                <FooterMenuItemListItem key={footerMenuItem}>
                  {footerMenuItem}
                </FooterMenuItemListItem>
              ))}
            </FooterMenuItemList>
          </FooterMenuItem>
          <FooterMenuCta>
            {socialImages.map((socialImage) => (
              <FooterSocialImage
                src={socialImage.src}
                alt={socialImage.alt}
                key={socialImage.src}
              />
            ))}
          </FooterMenuCta>
        </FooterMenu>
      </FooterContainer>
    </FixedFooter>
  )
}

export default Footer
