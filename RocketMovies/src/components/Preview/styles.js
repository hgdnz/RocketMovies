import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 1113px;
  margin: 0 auto;

  a:nth-child(1) {
    margin-left: 40px;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 19px;
  }

  svg {
    width: 140px;
    height: 20px;
  }

  .infoUser {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 40px;

    img {
      width: 16px;
      border-radius: 8px;
    }
  }

  .infoTags {
    span {
      background-color: ${({ theme }) => theme.COLORS.GRAY_400};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .description {
    overflow-y: auto;
    margin-top: 48px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > header {
    width: 1113px;
    margin: 0 auto;
  }
`
