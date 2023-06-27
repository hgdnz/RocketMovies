import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display:grid;
  grid-template-rows:auto;
  grid-template-areas:
  'header'
  'section'
  'content';

  > main {
    overflow-y:auto;
  }  
`

export const Content = styled.div`
  grid-area: content;

  margin: auto;
  max-width: 1137px;

`
