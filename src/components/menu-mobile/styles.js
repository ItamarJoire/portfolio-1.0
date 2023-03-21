import styled, { css } from 'styled-components'

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #7867E0;

  opacity: 0;
  pointer-events: none;
  
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `}
  `

