import styled from "styled-components/macro";

function Left() {
  return (
    <Container>
      <h1>Your Result</h1>
      <Inner>
        <h1>76</h1>
        <p>of 100</p>
      </Inner>
      <h1 className="great">Great</h1>
      <p className="para">
        You scored higer than 65% of the people who have taken these tests.
      </p>
    </Container>
  );
}

export default Left;

const Container = styled.div`
  flex: 0.5;
  height: 100%;
  border-radius: 28px;
  background: linear-gradient(0deg, #4233f0 45%, #6743ff 55%);
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  align-items: center;

  h1 {
    color: hsl(241, 100%, 89%);
    font-weight: 400;
  }

  h1.great {
    color: white;
    font-size: 3rem;
    margin: 20px;
  }

  p.para {
    width: 60%;
    text-align: center;
    font-size: 1.2rem;
    color: hsl(241, 100%, 89%);
    font-weight: bold;
  }
`;

const Inner = styled.div`
  margin-top: 30px;
  width: 60%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  background-color: #4233f0;
  box-shadow: -2px 10px 25px 0px rgba(0, 0, 0, 0.75);

  h1 {
    font-size: 5.5rem;
    font-weight: bold;
    color: white;
  }

  p {
    font-size: 1.5rem;
    color: hsl(241, 100%, 89%);
  }
`;
