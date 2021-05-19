import {useParams} from "react-router-dom";
import styled from "styled-components";

export const UrlParameter=()=>{
  const {id}=useParams()
  return(
    <SHomeContainer>
      <h1>URLパラメータページです</h1>
      <p>パラメータは{id}です</p>
    </SHomeContainer>
  )
}

const SHomeContainer=styled.div`
min-height:40px;
background-color:#acbacb;
text-align:center;
`