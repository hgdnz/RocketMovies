import styled from 'styled-components'

export const Container = styled.div`
  height: 56px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    display: flex;
    flex-direction: row;
    height: 56px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
  svg {
    margin-left: 16px;
  }
`
