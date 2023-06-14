import styled from 'styled-components'

export const SectionContainer = styled.section<{ backgroudImage?: string }>`
  padding: 80px;
  ${({ backgroudImage }) =>
    backgroudImage &&
    `
    background-image: url(${backgroudImage});
    background-size: contain;
    background-position: center;
  `}
  &:nth-child(odd) {
    background-color: #fff;
  }
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`
