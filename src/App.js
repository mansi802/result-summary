import styled from "styled-components/macro";
import Left from "./Components/Left";
import Right from "./Components/Right";

function App() {
  return (
    <Container>
      <MainDiv>
        <Left />
        <Right />
      </MainDiv>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 40vw;
  height: 50vh;
  background: white;
  display: flex;

  @media (max-width: 678px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
  }
`;
