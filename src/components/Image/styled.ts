import styled from 'styled-components'

export const ImageContainer = styled.img<{ width?: string; height?: string }>`
  object-fit: contain;
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
`
