import React from "react";
import "./Home.css";

import HomeProductTab from "../../layouts/ProductLayouts/homeProduct/HomeProductTab";
import HomeCategoriBanner from "../../layouts/ProductLayouts/CategoriLayouts/HomeCategoriBanner";
import HomePageBanner from "../../layouts/allBanner/HomeBanner/HomePageBanner";

const Home = () => {
  return (
    <>
      {/* banner area start */}
      <HomePageBanner />
      {/* banner area end */}

      {/* category banner area start */}
      <HomeCategoriBanner />

      {/* category banner area end  */}

      {/* product area start  */}
      <HomeProductTab />
      {/* product area end  */}
    </>
  );
};

export default Home;
