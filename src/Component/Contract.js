import { useState } from "react";
import styled from "styled-components";

const Contract = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with:", { username, password });
  };
  return (
    <>
      <Wrapper>
        <div className="conatiner">
          <h1>Contract</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7442.5060302276715!2d79.10548369286876!3d21.14232692882239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c74aa350f41f%3A0xe7163602fa5fc21!2sMahal%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699803564352!5m2!1sen!2sin"
            width="100%"
            height="300px"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="login-form-container">
            <h2>Login</h2>
            <div className="input-container">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="cammand"
              style={{height:"90px"}}
              />
            </div>
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <div className="command-box">
              {/* Add any additional content for the command box */}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .login-form-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: grid;
   
    margin-top: 21px;
  }

  .input-container {
    margin-bottom: 15px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .login-button {
    background-color: rgb(0,128,128);
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login-button:hover {
    background-color: #45a049;
  }

  .command-box {
    /* Add styling for the command box */
  }
`;
export default Contract;
