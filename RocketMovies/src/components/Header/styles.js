import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  gap: 64px;
  align-items: center;
  justify-content: center;

  Input {
    width: 600px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    align-items: flex-end;
    padding-right: 9px;
  }

  strong {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    background-color: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
