import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > svg {
    display: flex;
    margin-top: 8px;
    margin-bottom: 15px;
  }

  > p {
    flex: 1;
    text-align: left;
    font-weight: 400;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;

    > span {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
