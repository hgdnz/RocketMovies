import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;
  

  > div {    
    display:flex;
    align-items:center;
    justify-content:center;
    gap:776px;
  }

  > h2 {  
     padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }

  > button{
    margin:0;
  }
`
