import { SectionContainer } from './styled'
import { SectionProps } from './type'

const Section: React.FC<SectionProps> = ({ children, backgroudImage }) => {
  return <SectionContainer backgroudImage={backgroudImage}>{children}</SectionContainer>
}

export default Section
