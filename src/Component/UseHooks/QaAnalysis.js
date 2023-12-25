import * as React from "react";
import styled from "styled-components";

const QaServiceComponent = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <ContentContainer>
            <h1>Qa Service</h1>
            <p>
              A QA analyst is a person who has good knowledge of programming
              languages, software development tools, software testing tools, and
              troubleshooting. QA analysts test the software produced by the use
              of different software testing tools to check if they meet the
              required quality or not.
            </p>
          </ContentContainer>
        </TextContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: rgb(238, 238, 238);
`;

const TextContainer = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  height: 14rem;
  padding: 11px;
`;

const ContentContainer = styled.div`
  width: 65%;
  display: grid;
  text-align: center;
  margin: auto;

  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  p {
    font-size: medium;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default QaServiceComponent;
