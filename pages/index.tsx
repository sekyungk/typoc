import styled from "styled-components";
import BoldTextSet from "../components/BoldTextSet";
import TextSet from "../components/TextSet";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

function HomePage() {
  return (
    <Container>
      <BoldTextSet />
      <TextSet />
    </Container>
  );
}

export default HomePage;
