import styled, { css } from 'styled-components'

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 18, 17, 0.95);
  background: linear(34deg, rgba(25, 88, 24, 0.95) 0%, rgba(17, 18, 17, 0.95) 95%);

  opacity: 0;
  pointer-events: none;
  transition: .4s;
  transform: translateY(0px);

  nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
  }

    ${({ isVisible }) => isVisible && css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(50px);
    `}
  `

