import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    'header'
    'content';
`

export const Content = styled.div`
  grid-area: content;
  margin: 40px auto;

  width: 1137px;

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    gap: 8px;
    align-items: center;
  }

  div {
    margin-top: 24px;
  }
`
