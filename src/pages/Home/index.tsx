import Section from '../../components/Section'
import Image from '../../components/Image'
import { Column, Flex, TextBox, Text, Grid, GridItem } from './styled'

import ClickThroughRateImage from '../../assets/click-through-rate.png'
import HowItWorkFirstImage from '../../assets/how-it-work-1.png'
import HowItWorkSecondImage from '../../assets/how-it-work-2.png'
import HowItWorkThirdImage from '../../assets/how-it-work-3.png'
import HowItWorkFourthImage from '../../assets/how-it-work-4.png'
import BackGroundImage from '../../assets/power-up-1.png'
import PowerUpSecondImage from '../../assets/power-up-2.png'
import PowerUpThirdImage from '../../assets/power-up-3.png'

const workData = [
  {
    image: HowItWorkFirstImage,
    title: '1. Lolem ipsum oder',
    description: 'Lolem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    image: HowItWorkSecondImage,
    title: '2. Odee lorem ipsum',
    description: 'Velit risus semper proin ac, aliquam tristique justo vulputate.',
  },
  {
    image: HowItWorkThirdImage,
    title: '3. Yopus orem ipsum oder',
    description: 'Maecenas ultricies amet justo egastas enum tempus diam leo',
  },
  {
    image: HowItWorkFourthImage,
    title: '4. Momo ipsum lorem',
    description: 'Mauris odio fames porta fames facillisis cursus enim.',
  },
]

const lastSectionData = [
  {
    image: PowerUpSecondImage,
    title: 'Yopus orem ipsum oder',
    description:
      'Lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi sed nec ultrices. ',
  },
  {
    image: PowerUpThirdImage,
    title: 'Odee lorem ipsum',
    description:
      'Lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi sed nec ultrices.',
  },
]

const HomePage: React.FC = () => {
  return (
    <>
      <Section>
        <Flex>
          <TextBox padding="0 80px 0 0 ">
            <h1>Higher click-through rates for your product</h1>
            <Text>
              Don't stop tracking your product and better analyze your customers just too easy
              steps.
            </Text>
          </TextBox>
          <Image src={ClickThroughRateImage} alt="click-through-rate-image" />
        </Flex>
      </Section>
      <Section>
        <Column>
          <h2 className="center">How BetterGoods works?</h2>
          <TextBox padding="0 20% 30px 20%">
            <Text center>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              sed nec ultrices. Ullamcorper ut proln arcu mi vel erat.
            </Text>
          </TextBox>
          <Grid>
            {workData.map((item) => (
              <GridItem>
                <Image src={item.image} alt="how-it-work-image" />
                <h3>{item.title}</h3>
                <Text>{item.description}</Text>
              </GridItem>
            ))}
          </Grid>
        </Column>
      </Section>
      <Section backgroudImage={BackGroundImage}>
        <Column>
          <Text color="#fff" fontSize="2.5rem" bold center>
            Power-up your performance
          </Text>
          <TextBox padding="30px" mPadding="20px 10px">
            <Text color="#fff" center>
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
            </Text>
          </TextBox>
          <TextBox padding="30px" mPadding="20px 10px">
            <Text color="#fff" center>
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
              lolem ipsum dolor sit amet, consectetur adipiscing elit. Purus upsum est facillisi mi
            </Text>
          </TextBox>
        </Column>
      </Section>
      <Section>
        <Grid cols={2}>
          {lastSectionData.map((item) => (
            <GridItem alignItems="center">
              <Image src={item.image} alt="power-up-image" />
              <h3>{item.title}</h3>
              <Text center>{item.description}</Text>
            </GridItem>
          ))}
        </Grid>
      </Section>
    </>
  )
}

export default HomePage
