import styled from "styled-components";
import { NavLink } from "react-router-dom";
import  {Button}  from "./Button";
const HeroSction = ({ HeadingShopName }) => {
  console.log(HeadingShopName);

  const { name } = HeadingShopName;
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="gride grid-container">
            <div className="hero hero-section">
              <div
                className="mainHero main-hero"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#333",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Shopping in India
                </p>
                <h1
                  style={{
                    fontSize: "2.8rem",
                    color: "#008080",
                    marginBottom: "20px",
                    textAlign: "left",
                  }}
                >
                  {name}
                </h1>
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: "2rem",
                      width: "30rem",
                      color: "#666",
                    }}
                  >
                    What makes your products unique? And what can people benefit
                    from it? Highlighting these features is an effective
                    marketing strategy for your business.
                    <NavLink  className="nav-link" to={"/Product"}>
                   <Button style={{marginTop:"10px"}}>Show on</Button>
                    </NavLink>
                    
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="image image-box">
                <img src="/image/logo.jpg" className="imageContainer" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .container {
    background-color: #f3f0f0;
    padding: 20px;
    height: 90%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
  }
  .image-box {
    width: 330px;

    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      11px -9px 16px 4px rgba(0, 0, 0, 0.66);
    box-shadow: 0px 10px 13px -7px #000000,
      11px -9px 16px 4px rgba(0, 0, 0, 0.66);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0rem;

    align-items: center;
  }

  .main-hero {
    background-color: #f3f0f0;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 2fr;
    }
  }
  @media (max-width: 650px) {
    .grid-container {
      grid-template-columns: 2fr;
    }
  }
`;
export default HeroSction;
