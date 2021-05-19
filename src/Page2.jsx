import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page2 = () => {
  return (
    <SPage2Container>
      <h1>Page2ページです</h1>
      <Link to="/page2/100">URLパラメータ</Link>
    </SPage2Container>
  );
};

const SPage2Container = styled.div`
  min-height: 40px;
  background-color: #abcabc;
  text-align: center;
`;
