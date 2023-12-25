import styled from "styled-components";
import { useGloableContex } from "./UseHooks/ContexApi";

const Services = () => {
  const { services } = useGloableContex();
  console.log(services);

  return (
    <div className="contaner">
      <Wrapper className="section">
        {services.map((event) => {
          return (
            <>
              <div className="card">
                <img src={event.urls.small} alt="Card Image" />
                <div className="card-content">
                  <h2>Card Title</h2>
                  <p>This is a description of the card.</p>
                </div>
              </div>
            </>
          );
        })}
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`

  .card {
    width: 35rem;
    height:100px;
    background-color: #eaeaea;
    border-radius: 26px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    display: inline-flex;
    margin-left: 70px;
    margin-bottom:10px;
    
  }

  .card img {
    width: 50%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }

  .card-content {
    padding: 50px;
    margine: 30px;
    display: inherit;
  }

  .card-content h2 {
    margin-top: 0;
  }

  .card-content p {
    margin-bottom: 20px;
  }



  .btn:hover {
    background-color: #0056b3;
  }
 
`;
export default Services;
