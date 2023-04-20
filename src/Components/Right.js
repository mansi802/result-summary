import styled from "styled-components/macro";
import data from "../data.json";

function Right() {
  return (
    <Container>
      <h1>Summary</h1>
      <DataDiv>
        {data.map((d) => (
          <div>
            <h1></h1>
          </div>
        ))}
      </DataDiv>
    </Container>
  );
}

export default Right;

const Container = styled.div`
  flex: 0.5;
  height: 100%;
  border: 1px solid black;
  border-radius: 28px;
  padding: 30px;
`;

const DataDiv = styled.div`
  .red {
    background-color: hsl(0, 100%, 67%);
  }

  .yellow {
    background-color: hsl(39, 100%, 56%);
  }

  .green {
    background-color: hsl(166, 100%, 37%);
  }

  .blue {
    background-color: hsl(234, 85%, 45%);
  }
`;
