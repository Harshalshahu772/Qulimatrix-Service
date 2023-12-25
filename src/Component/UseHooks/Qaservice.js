import React from "react";
import styled from "styled-components";

const QaService = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="second-container">
            <div className="grid-container">
              <div className="item1">
                <img
                  src="image/logo.jpg"
                  alt="Image 1"
                  style={{ width: "100%", height: "80%", marginTop: "30px" }}
                />
              </div>
              <div className="item2">
                <div className="function-text">
                  <h1>FUNCTION</h1>
                  <p>
                    A QA analyst is a person who has good knowledge of
                    programming languages, software development tools, software
                    testing tools, and troubleshooting. QA analysts test the
                    software produced by the use of different software testing
                    tools to check if they meet the required quality or not.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default QaService;

const Wrapper = styled.section`
  .container {
    padding: 17px;
    background: #f3f3f3;
  }

  .second-container {
    width: 80%;
    max-width: 1200px;
    margin: auto;
  }

  .function-text {
    padding: 17px;
    margin-top: 20px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr; /* Change to a single column by default */
  }

  p {
    font-size: large;
    font-weight: 400;
  }

  .item1 {
    width: 100%;
    height: auto; /* Allow the image to adjust its height */
  }

  .item2 {
    text-align: start;
    padding: 20px;
  }

  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr); /* Two columns for larger screens */
    }
  }
`;
