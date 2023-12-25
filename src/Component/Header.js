import styled from "styled-components";
import NavScrollExample from "./Navber";

const Header = () => {
  return (
    <>
      <Wrapper>
        <NavScrollExample />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  overflow: flex;
`;

export default Header;
