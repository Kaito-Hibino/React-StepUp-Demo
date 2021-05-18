import styled from "styled-components";

export const Page1=()=>{
  return(
    <SPage1Container>
      <h1>Page1ページです</h1>
    </SPage1Container>
  )
}

const SPage1Container=styled.div`
min-height:40px;
background-color:#abc400;
text-align:center;
`