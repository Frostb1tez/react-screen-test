import styled from 'styled-components'

const SectionContainer = styled.section`
  padding: 40px;
  &:nth-child(odd) {
    background-color: #fff;
  }
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`

type SectionProps = {
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>
}

export default Section
