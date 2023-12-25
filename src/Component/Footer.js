import styled from "styled-components";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin,FaMeta } from "react-icons/fa6";
const Footer = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <div className="item1">
          <h1 className="item2">
            Shopping Store - Collect More Information
          </h1>
          <div className="container">
            <button className="hover-button">Hover Me</button>
          </div>
        </div>

        <div className="grid-container">
          <div className="item4">
            <span>Shopping Store</span>
            <p>
              The little differences and features in a product that may seem
              trivial or boring to you are important to shoppers and help them
              make purchase decisions.
            </p>
          </div>
          <div className="item4">
            <p>Subcripted for imfortant update</p>

            <input type="text" style={{height:"50px", borderRadius:"10px", marginTop:"10px"}} placeholder="Yore email"/>
            <div className="container">
            <button className="hover-button" >Hover Me</button>
          </div>
          </div>
          <div className="item4">
           <p>Follow us</p>
            <FaInstagramSquare />
            <FaLinkedin/>
            <FaMeta/>
          </div>
         
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .item1 {
    background-color:rgb(196 196 196);
    font-size: 1.5rem;
    height: 8em;
    width:50%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:-40px;
  }

  .hover-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: rgb(0, 128, 128);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }

  .hover-button:hover {
    background-color: #006666;
  }

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    .item1 {
      height: auto;
    }
    .hover-button {
      margin: 20px 0;
    }
  }

  .item2 {
    margin: unset;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .main-container {
    background-color:rgb(73 77 77);
    width: 100%;
    padding: 20px;
    margin-top: 30px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 0;
    .item4 {
      background-color: #7a7878;
      margin: 10px;
      padding: 20px;
      width: 80%;
    }
  }

  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 1.5rem;
  }

  .container {
    text-align: center;
  }
  p {
    margin: 0 0 10px;
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px;
  }



  button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-top: 5px;
    cursor: pointer;
  }

  /* Responsive Styles */
  @media only screen and (max-width: 600px) {
    .item4 {
      max-width: 100%;
    }
    .item1 {
      background-color: rgba(255, 255, 255, 0.8);
      font-size: 1.5rem;
      height: 8em;
      width:90%;
      margin:auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top:-20px;
    }
  }
`;

export default Footer;
