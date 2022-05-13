import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleProductView from "../../layouts/SingleProductView/SingleProductView";
import "./Shop.css";

const Shop = () => {
  /**
   * Product Menagement
   */
  /**
   * Search Functionality
   */
  const [searchVal, setSearchVal] = useState("");
  // Get All Product
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products?q=${searchVal}&_embed=veriations`)
      .then((res) => {
        setAllProduct(res.data);
      });
  }, [searchVal]);

  console.log(allProduct);
  /**
   * Product Search And filtering functionality
   */
  // Filtered by Product attribute
  // const filter = (arr = [], att, key) => {
  //   const elements = [...arr];
  //   return elements.filter((product) => {
  //     return product[att].includes(key);
  //   });
  // };
  const handleSearch = (e) => {
    setAllProduct([]);
    let target = e.target;
    setSearchVal(target.value);
  };
  return (
    <>
      {/* <!-- shop main area start  --> */}
      <div className="shop-main-area pt-120 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="shop-main-wrapper mb-60">
                <div className="shop-main-wrapper-head mb-30">
                  <div className="swowing-list">
                    Showing <span>12 of 39</span> Products
                  </div>
                  <div className="sort-type-filter">
                    <div className="sorting-type">
                      <span>Sort by : </span>
                      <select
                        className="sorting-list"
                        name="sorting-list"
                        id="sorting-list"
                      >
                        <option value="1">Default</option>
                        <option value="2">Most popular</option>
                        <option value="3">Date</option>
                        <option value="4">Trending</option>
                        <option value="4">Featured</option>
                        <option value="4">Discounted</option>
                      </select>
                    </div>
                    <div className="action-item action-item-filter d-lg-none">
                      <a href="/" className="view-filter-button">
                        <i className="flaticon-filter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="products-wrapper products-5-column">
                  {allProduct.reverse().map((singleProduct, index) => (
                    <>
                      <SingleProductView
                        key={index}
                        ProductObj={singleProduct}
                        index={index}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sidebar-widget-wrapper mb-110 d-none d-lg-block">
                <div className="product-filters mb-50">
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Search</h4>
                    <div className="filter-widget-content">
                      <div className="filter-widget-search">
                        <input
                          type="text"
                          onChange={(e) => handleSearch(e)}
                          value={searchVal}
                          placeholder="Search here.."
                        />
                        <button>
                          <i className="fal fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Category</h4>
                    <div className="filter-widget-content">
                      <div className="category-items">
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Shirts</div>{" "}
                          <span className="category-items-number">8</span>
                        </a>
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Pants</div>{" "}
                          <span className="category-items-number">12</span>
                        </a>
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Jackets</div>{" "}
                          <span className="category-items-number">17</span>
                        </a>
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Leggings</div>{" "}
                          <span className="category-items-number">6</span>
                        </a>
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Beachware</div>{" "}
                          <span className="category-items-number">25</span>
                        </a>
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Underwear</div>{" "}
                          <span className="category-items-number">17</span>
                        </a>
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Bag</div>{" "}
                          <span className="category-items-number">15</span>
                        </a>
                        <a href="shop.html" className="category-item">
                          <div className="category-name">Belt</div>{" "}
                          <span className="category-items-number">9</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Size</h4>
                    <div className="filter-widget-content">
                      <div className="category-sizes">
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="ex-s"
                          />
                          <label className="check-label" htmlFor="ex-s">
                            Extra Small
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="sm"
                          />
                          <label className="check-label" htmlFor="sm">
                            Small
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="md"
                          />
                          <label className="check-label" htmlFor="md">
                            Medium
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="large"
                          />
                          <label className="check-label" htmlFor="large">
                            Large
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="ex-l"
                          />
                          <label className="check-label" htmlFor="ex-l">
                            Extra Large
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Rating</h4>
                    <div className="filter-widget-content">
                      <div className="category-ratings">
                        <div className="category-rating">
                          <input
                            className="radio-box"
                            type="radio"
                            id="st-5"
                            name="rating"
                          />
                          <label className="radio-star" htmlFor="st-5">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </label>
                        </div>
                        <div className="category-rating">
                          <input
                            className="radio-box"
                            type="radio"
                            id="st-4"
                            name="rating"
                          />
                          <label className="radio-star" htmlFor="st-4">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                          </label>
                        </div>
                        <div className="category-rating">
                          <input
                            className="radio-box"
                            type="radio"
                            id="st-3"
                            name="rating"
                          />
                          <label className="radio-star" htmlFor="st-3">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                          </label>
                        </div>
                        <div className="category-rating">
                          <input
                            className="radio-box"
                            type="radio"
                            id="st-2"
                            name="rating"
                          />
                          <label className="radio-star" htmlFor="st-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                          </label>
                        </div>
                        <div className="category-rating">
                          <input
                            className="radio-box"
                            type="radio"
                            id="st-1"
                            name="rating"
                          />
                          <label className="radio-star" htmlFor="st-1">
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Colour</h4>
                    <div className="filter-widget-content">
                      <div className="category-colours">
                        <div className="category-color">
                          <ul className="product-color-nav">
                            <li className="cl-pink active">
                              <img
                                src="https://themepure.net/html/ecomart-prev/ecomart/assets/img/product/product-img1.jpg"
                                alt="img"
                              />
                            </li>
                            <li className="cl-black">
                              <img
                                src="https://themepure.net/html/ecomart-prev/ecomart/assets/img/product/product-img2.jpg"
                                alt="img"
                              />
                            </li>
                            <li className="cl-blue">
                              <img
                                src="https://themepure.net/html/ecomart-prev/ecomart/assets/img/product/product-img3.jpg"
                                alt="img"
                              />
                            </li>
                            <li className="cl-red">
                              <img
                                src="https://themepure.net/html/ecomart-prev/ecomart/assets/img/product/product-img4.jpg"
                                alt="img"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Brand</h4>
                    <div className="filter-widget-content">
                      <div className="category-brands">
                        <div className="category-brand">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="b-next"
                          />
                          <label className="check-label" htmlFor="b-next">
                            Next
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="b-ri"
                          />
                          <label className="check-label" htmlFor="b-ri">
                            River Island
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="b-geox"
                          />
                          <label className="check-label" htmlFor="b-geox">
                            Geox
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="b-eco"
                          />
                          <label className="check-label" htmlFor="b-eco">
                            Ecomart
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="b-abby"
                          />
                          <label className="check-label" htmlFor="b-abby">
                            Abby
                          </label>
                        </div>
                        <div className="category-size">
                          <input
                            className="check-box"
                            type="checkbox"
                            id="b-nike"
                          />
                          <label className="check-label" htmlFor="b-nike">
                            Nike
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Price</h4>
                    <div className="filter-widget-content">
                      <div className="filter-price">
                        <div className="slider-range">
                          <div className="slider-range-bar"></div>
                          <p>
                            <label htmlFor="amount">Price :</label>
                            <input
                              type="text"
                              id="amount"
                              className="amount"
                              readonly
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4 className="filter-widget-title drop-btn">Tags</h4>
                    <div className="filter-widget-content">
                      <div className="category-tags">
                        <a href="/#" className="category-tag">
                          Fashion
                        </a>
                        <a href="/#" className="category-tag">
                          Hats
                        </a>
                        <a href="/#" className="category-tag">
                          Sandal
                        </a>
                        <a href="/#" className="category-tag">
                          Bags
                        </a>
                        <a href="/#" className="category-tag">
                          Snacker
                        </a>
                        <a href="/#" className="category-tag">
                          Denim
                        </a>
                        <a href="/#" className="category-tag">
                          Sunglasses
                        </a>
                        <a href="/#" className="category-tag">
                          Beachwear
                        </a>
                        <a href="/#" className="category-tag">
                          Vagabond
                        </a>
                        <a href="/#" className="category-tag">
                          Trend
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
      {/* <!-- shop main area end  --> */}
    </>
  );
};

export default Shop;
