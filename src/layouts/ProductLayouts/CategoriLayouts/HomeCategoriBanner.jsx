import React from "react";

// Categori banner imagess
import image1 from "../../../__assets/img/category_banner/category-banner1.jpg";
import image4 from "../../../__assets/img/category_banner/category-banner4.jpg";
import image2 from "../../../__assets/img/category_banner/category-banner2.jpg";
import image3 from "../../../__assets/img/category_banner/category-banner3.jpg";

const HomeCategoriBanner = () => {
  return (
    <>
      <div className="category-banner-area pt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="category-banner-single mb-30 pos-rel">
                <div className="category-banner-img">
                  <img src={image1} alt="banner-img" />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <a href="shop.html" className="product-category">
                      Man
                    </a>
                    <p className="category-short-desc">
                      Fashion Collection - 2022
                    </p>
                    <a href="shop.html" className="border-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 order-xl-3">
              <div className="category-banner-single mb-30 pos-rel">
                <div className="category-banner-img">
                  <img src={image4} alt="banner-img" />
                </div>
                <div className="category-banner-inner">
                  <div className="category-banner-content">
                    <a href="shop.html" className="product-category">
                      Women
                    </a>
                    <p className="category-short-desc">
                      Winter Collection - 2022
                    </p>
                    <a href="shop.html" className="border-btn">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 order-xl-2">
              <div className="row">
                <div className="col-xl-12 col-lg-6 col-md-6">
                  <div className="category-banner-single mb-30 pos-rel">
                    <div className="category-banner-img">
                      <img src={image2} alt="banner-img" />
                    </div>
                    <div className="category-banner-inner align-items-end">
                      <div className="category-banner-content">
                        <a href="shop.html" className="product-category">
                          Kids Collection
                        </a>
                        <p className="category-short-desc">Trending - 2022</p>
                        <a href="shop.html" className="border-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6">
                  <div className="category-banner-single mb-30 pos-rel">
                    <div className="category-banner-img">
                      <img src={image3} alt="banner-img" />
                    </div>
                    <div className="category-banner-inner justify-content-end">
                      <div className="category-banner-content">
                        <a href="shop.html" className="product-category">
                          Cosmetics
                        </a>
                        <p className="category-short-desc">
                          Fashion Collection - 2022
                        </p>
                        <a href="shop.html" className="border-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategoriBanner;
