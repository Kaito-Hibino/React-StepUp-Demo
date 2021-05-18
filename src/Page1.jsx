import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page1 = () => {
  return (
    <SPage1Container>
      <h1>Page1ページです</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br/>
      <Link to="/page1/detailB">DetailB</Link>
    </SPage1Container>
  );
};

const SPage1Container = styled.div`
  min-height: 40px;
  background-color: #abc400;
  text-align: center;
`;
