import HeroSction from "./HeroSction";

import Trusted from "./Trusted";

const Home = () => {
  const myProps = {
    name: "Shpoing Store",
  };

  return (
    <>
      <HeroSction HeadingShopName={myProps} />

      <Trusted />
    </>
  );
};
export default Home;
