import React from "react";

const HomePageBanner = () => {
  return (
    <>
      <div className="banner-area banner-area1 pos-rel">
        <div className="swiper-container slider__active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-banner single-banner-1 banner-800 d-flex align-items-center pos-rel">
                <div
                  className="banner-bg banner-bg1 banner-bg1-1"
                  style={{
                    backgroundImage:
                      "url(https://themepure.net/html/ecomart-prev/ecomart/assets/img/banner/banner-1-1.jpg)",
                  }}
                ></div>
                <div className="container pos-rel">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8">
                      <div className="banner-content banner-content1 banner-content1-1 pt-0">
                        <div
                          className="banner-meta-text"
                          data-animation="fadeInUp"
                          data-delay=".3s"
                        >
                          <span>New Arrival</span>
                        </div>
                        <h1
                          className="banner-title"
                          data-animation="fadeInUp"
                          data-delay=".5s"
                        >
                          Hot Fashion Collection
                        </h1>
                        <div
                          className="banner-btn"
                          data-animation="fadeInUp"
                          data-delay=".7s"
                        >
                          <a href="shop.html" className="fill-btn">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-banner single-banner-1 banner-800 d-flex align-items-center pos-rel">
                <div
                  className="banner-bg banner-bg1 banner-bg1-1"
                  data-background="https://themepure.net/html/ecomart-prev/ecomart/assets/img/banner/banner-1-2.jpg"
                ></div>
                <div className="container pos-rel">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8">
                      <div className="banner-content banner-content1 banner-content1-1 pt-0">
                        <div
                          className="banner-meta-text"
                          data-animation="fadeInUp"
                          data-delay=".3s"
                        >
                          <span>New Arrival</span>
                        </div>
                        <h1
                          className="banner-title"
                          data-animation="fadeInUp"
                          data-delay=".5s"
                        >
                          Autumn Fashion For Man
                        </h1>
                        <div
                          className="banner-btn"
                          data-animation="fadeInUp"
                          data-delay=".7s"
                        >
                          <a href="shop.html" className="fill-btn">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-banner single-banner-1 banner-800 d-flex align-items-center pos-rel">
                <div
                  className="banner-bg banner-bg1 banner-bg1-1"
                  data-background="https://themepure.net/html/ecomart-prev/ecomart/assets/img/banner/banner-1-3.jpg"
                ></div>
                <div className="container pos-rel">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8">
                      <div className="banner-content banner-content1 banner-content1-1 pt-0">
                        <div
                          className="banner-meta-text"
                          data-animation="fadeInUp"
                          data-delay=".3s"
                        >
                          <span>New Arrival</span>
                        </div>
                        <h1
                          className="banner-title"
                          data-animation="fadeInUp"
                          data-delay=".5s"
                        >
                          Perfect Fashion Unique Dress
                        </h1>
                        <div
                          className="banner-btn"
                          data-animation="fadeInUp"
                          data-delay=".7s"
                        >
                          <a href="shop.html" className="fill-btn">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* If we need navigation buttons */}
          <div className="slider-nav d-none">
            <div className="slider-button-prev">
              <i className="fal fa-long-arrow-left"></i>
            </div>
            <div className="slider-button-next">
              <i className="fal fa-long-arrow-right"></i>
            </div>
          </div>
          {/* If we need pagination  */}
          <div className="slider-pagination slider1-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
