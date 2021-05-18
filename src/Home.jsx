import styled from "styled-components";

export const Home=()=>{
  return(
    <SHomeContainer>
      <h1>Homeページです</h1>
    </SHomeContainer>
  )
}

const SHomeContainer=styled.div`
min-height:40px;
background-color:#eda400;
text-align:center;
`