import styled from "styled-components";

export default styled.div`
  background-color: ${(props) => (props.$isBlack ? "black" : "papayawhip")};
  width: 100px;
  height: 100px;
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
