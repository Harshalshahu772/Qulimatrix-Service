import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgPlayListSearch } from "react-icons/cg";
import { useState } from "react";

import { FaCartPlus } from "react-icons/fa6";
function NavScrollExample() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <Wrapper>
        <div className="navbar">
          <CgPlayListSearch className="menuIcon" onClick={toggleMenu} />

          <div className="navbarDiv">
            <div className="logo">
              <a href="#">Logo</a>
            </div>
            <ul className={menuVisible ? "nav active" : "nav"}>
              <li>
                <NavLink className="nav-link" to={"/Home"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link " to={"/About"}>
                  About
                </NavLink>
              </li>
             
              <li>
                <NavLink className="nav-link" to={"/Contract"}>
                  Contract
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"/Services"}>
                Services
                </NavLink>
              </li>
              
              <li>
                <NavLink className="nav-link" to="#">
                  <FaCartPlus className="shopIcone" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .navbar {
    background-color: #cacaca;
    padding-right: 15px;
    padding-left: 15px;
  }

  .navbarDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d8d8d8;
  }

  .logo a {
    font-size: 35px;
    font-weight: 600;
    color: white;
  }

  ul {
    display: inline-block;
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  ul li a {
    color: black;
    padding: 14px 16px;
    margin-right: 25px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 100;
    display: block;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .menuIcon {
    color: black;
    font-size: 30px;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
  }

  .menuIcon {
    display: none;
  }
  a:hover {
    background-color: #00000073;
    color: white;
  }

  @media only screen and (max-width: 750px) {
    .logo a {
      font-size: 30px;
      color: #3a2118;
      padding-left: 50px;
    }

    ul li a {
      font-size: 17px;
      color: #6b5050;
    }

    .menuIcon {
      display: block;
    }

    ul {
      background: #e9ece9;
      position: absolute;
      width: 100%;
      height: 60vh;
      top: 53px;
      left: 0;
      text-align: center;
      transition: all 0.5s;
      display: none;
    }

    .nav.active {
      display: block;
    }

    ul li a {
      font-size: 20px;
    }

    ul li {
      display: block;
    }
  }
`;

export default NavScrollExample;
