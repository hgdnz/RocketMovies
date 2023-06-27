import styled from 'styled-components'

export const Container = styled.button`
  width: 207px;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: 0px;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  }
`
