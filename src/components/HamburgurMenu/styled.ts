import styled from 'styled-components'

export const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const HamburgerMenuLine = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 2px;
  background-color: darkturquoise;
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    &:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
  `}
`
