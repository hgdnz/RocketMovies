import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'header'
    'content';

  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    background-color: black;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    height: 88px;
    width: auto;
    padding-left: 24px;
    border-radius: 8px;

    div {
      margin: 0;
    }
  }
`

export const Form = styled.form`
  max-width: 1113px;
  margin: 38px auto;

  > header {
    display: flex;
    flex-direction: column;
    align-items: left;

    margin-bottom: 40px;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
      align-content: center;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 36px;
      font-weight: 700;
    }
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    input {
      width: 536px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    button:nth-child(1) {
      background-color: black;
      width: 500px;
    }

    button:nth-child(2) {
      width: 500px;
    }
  }

  Section {
    div {
      font-size:20px;
      font-weight:700;
      display: flex;
      justify-content: flex-start;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      button {
        display:none;
      }
    }
   }
`
