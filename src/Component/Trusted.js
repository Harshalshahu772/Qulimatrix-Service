import styled from "styled-components";

const Trusted = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="container2">
            <h2 style={{textAlign:"center", marginBottom:"20px", color:"rgb(102, 102, 102)"}}>Comany Trusted</h2>
            <div className="grid">
              <div className="item">
                <img src="/image/img1.png" width={"70%"} />
              </div>
              <div className="item">
                <img src="/image/img2.png" height={"150%"} width={"70%"} />
              </div>
              <div className="item">
                <img src="/image/img3.png" width={"70%"} />
              </div>
              <div className="item">
                <img src="/image/img5.png" width={"70%"} />
              </div>
              <div className="item">
                <img src="/image/img6.png" width={"70%"} />
              </div>
           
            
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  /* Base styles for the grid */
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;

  }

  .item {
    border: 1px solid #b8aaaa;
    border-radius: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    text-align: center;
    background-color:#fff3f3;
  }

  .container2 {
    max-width: 80rem;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color:#f3f0f0;
  }

  /* Responsive styles */
  @media only screen and (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media only screen and (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (max-width: 600px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .item {
      height: 63px;
      width: 19rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;
      gap: 18rem;
    }
  }

  @media only screen and (max-width: 400px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Trusted;
