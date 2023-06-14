import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const Grid = styled.div<{ cols?: number }>`
  display: grid;
  grid-template-columns: ${({ cols }) => (cols ? `repeat(${cols}, 1fr)` : 'repeat(4, 1fr)')};
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const GridItem = styled.div<{ alignItems?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TextBox = styled.div<{ padding?: string; mPadding?: string }>`
  display: block;
  padding: ${({ padding }) => padding || '0'};
  @media (max-width: 768px) {
    padding: ${({ mPadding }) => mPadding || '0'};
  }
`
export const Text = styled.span<{
  color?: string
  fontSize?: string
  center?: boolean
  bold?: boolean
}>`
  ${({ center }) => center && 'display: block; text-align: center;'}
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ bold }) => bold && 'font-weight: bold;'}

  @media (max-width: 768px) {
    font-size: calc(${(props) => props.fontSize} * 0.8);
  }

  @media (max-width: 480px) {
    font-size: calc(${(props) => props.fontSize} * 0.6);
  }
`
