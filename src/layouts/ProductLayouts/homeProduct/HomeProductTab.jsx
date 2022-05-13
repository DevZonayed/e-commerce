import React, { useEffect, useState } from "react";

import axios from "axios";

import "./HomeProductTab.css";
import SingleProductView from "../../SingleProductView/SingleProductView";
import Skeleton from "react-loading-skeleton";

const HomeProductTab = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false);
  useEffect(() => {
    setLoadProduct(false);
    axios
      .get("http://localhost:5000/products?_embed=veriations")
      .then((res) => {
        setAllProduct(res.data);
        setLoadProduct(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /**
   * Image LoadTime Calculate
   */
  return (
    <>
      {/* product area start */}
      <section className="product-area pt-90 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-35">
                  Products of the week
                </h2>
              </div>
            </div>
          </div>
          <div className="product-tab-wrapper">
            <div className="product-tab-nav mb-60">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-1"
                    type="button"
                    role="tab"
                    aria-controls="nav-1"
                    aria-selected="true"
                  >
                    Best Seller <span className="total-product">[57]</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-2"
                    type="button"
                    role="tab"
                    aria-controls="nav-2"
                    aria-selected="false"
                  >
                    Hot Collection <span className="total-product">[25]</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-3-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-3"
                    type="button"
                    role="tab"
                    aria-controls="nav-3"
                    aria-selected="false"
                  >
                    Trendy <span className="total-product">[32]</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-4-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-4"
                    type="button"
                    role="tab"
                    aria-controls="nav-4"
                    aria-selected="false"
                  >
                    New Arrival<span className="total-product">[64]</span>
                  </button>
                </div>
              </nav>
            </div>
            <div className="product-tab-content">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-1"
                  role="tabpanel"
                  aria-labelledby="nav-1-tab"
                >
                  <div className="products-wrapper">
                    {!loadProduct ? (
                      <>
                        {[...Array(15)].map((x, y) => (
                          <div key={y} className="single-product">
                            <div className="product-image">
                              <Skeleton className="product-image-loading" />
                            </div>
                            <div className="product-desc">
                              <div className="product-name">
                                <Skeleton />
                              </div>
                              <div>
                                <Skeleton count={2} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {allProduct
                          .reverse()
                          .map((singleProduct, productIndex) => (
                            <SingleProductView
                              key={productIndex}
                              ProductObj={singleProduct}
                              index={productIndex}
                            />
                          ))}
                      </>
                    )}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-2"
                  role="tabpanel"
                  aria-labelledby="nav-2-tab"
                >
                  <div className="products-wrapper">
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/3/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Men's Poplin Dress Shirt
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£25.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-yellow active">
                            <img src="assets/img/shirt/3/1.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/shirt/3/2.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/3/3.jpg" alt="img" />
                          </li>
                          <li className="cl-orange">
                            <img src="assets/img/shirt/3/4.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/bag/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Varsi Leather Bag</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£65.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/bag/1.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/bag/2.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/bag/3.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-2-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Fit Twill Shirt for Woman
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£62.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-3-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker discount">
                            {" "}
                            -25%
                          </span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Grand Atlantic Chukka Boots
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£24.00</span>
                          <span className="price-old">£32.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/1/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Comfy Winter Shirt</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£55.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-pink active">
                            <img src="assets/img/shirt/1/1.jpg" alt="img" />
                          </li>
                          <li className="cl-light-white">
                            <img src="assets/img/shirt/1/3.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/shirt/1/5.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/1/7.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/pant/1/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Skinny Jeans Pant</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£45.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-navy active">
                            <img src="assets/img/pant/1/1.jpg" alt="img" />
                          </li>
                          <li className="cl-light-white">
                            <img src="assets/img/pant/1/4.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/pant/2/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker discount">
                            {" "}
                            -25%
                          </span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Men's Flat-Front Shorts
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£30.00</span>
                          <span className="price-old">£40.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/pant/2/1.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/pant/2/3.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/pant/2/5.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shoe/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Eastland Lumber Up Boots
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£38.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-4-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Women's Faux-Trim Shirt
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£84.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-16-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Soft Touch Interlock Polo
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£45.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/product-img1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Ecomart Smart Watch</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£30.00</span>
                          <span className="price-old">£38.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/sunglass/2.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Ecomart Smart Glass</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£25.00</span>
                          <span className="price-old">£39.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-black active">
                            <img src="assets/img/sunglass/2.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/sunglass/5.jpg" alt="img" />
                          </li>
                          <li className="cl-brown">
                            <img src="assets/img/sunglass/8.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/sunglass/11.jpg" alt="img" />
                          </li>
                          <li className="cl-wood">
                            <img src="assets/img/sunglass/14.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/2/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Cotton Shirt fot Men</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£85.00</span>
                          <span className="price-old">£99.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/shirt/2/1.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/2/4.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/shirt/2/7.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-5-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Double-breasted Blazer</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£32.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-1-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Ribbed Cotton Bodysuits
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£71.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-ash active">
                            <img
                              src="assets/img/product/800_1034/Image-1-1.jpg"
                              alt="img"
                            />
                          </li>
                          <li className="cl-light-white">
                            <img
                              src="assets/img/product/800_1034/Image-1-2.jpg"
                              alt="img"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-3"
                  role="tabpanel"
                  aria-labelledby="nav-3-tab"
                >
                  <div className="products-wrapper">
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/pant/2/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker discount">
                            {" "}
                            -25%
                          </span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Men's Flat-Front Shorts
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£30.00</span>
                          <span className="price-old">£40.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/pant/2/1.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/pant/2/3.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/pant/2/5.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shoe/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Eastland Lumber Up Boots
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£38.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/3/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Men's Poplin Dress Shirt
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£25.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-yellow active">
                            <img src="assets/img/shirt/3/1.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/shirt/3/2.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/3/3.jpg" alt="img" />
                          </li>
                          <li className="cl-orange">
                            <img src="assets/img/shirt/3/4.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/bag/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Varsi Leather Bag</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£65.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/bag/1.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/bag/2.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/bag/3.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-2-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Fit Twill Shirt for Woman
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£62.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/1/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Comfy Winter Shirt</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£55.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-pink active">
                            <img src="assets/img/shirt/1/1.jpg" alt="img" />
                          </li>
                          <li className="cl-light-white">
                            <img src="assets/img/shirt/1/3.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/shirt/1/5.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/1/7.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/pant/1/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Skinny Jeans Pant</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£45.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-navy active">
                            <img src="assets/img/pant/1/1.jpg" alt="img" />
                          </li>
                          <li className="cl-light-white">
                            <img src="assets/img/pant/1/4.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-3-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker discount">
                            {" "}
                            -25%
                          </span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Grand Atlantic Chukka Boots
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£24.00</span>
                          <span className="price-old">£32.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-4-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Women's Faux-Trim Shirt
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£84.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-16-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Soft Touch Interlock Polo
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£45.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/product-img1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Ecomart Smart Watch</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£30.00</span>
                          <span className="price-old">£38.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/sunglass/2.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Ecomart Smart Glass</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£25.00</span>
                          <span className="price-old">£39.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-black active">
                            <img src="assets/img/sunglass/2.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/sunglass/5.jpg" alt="img" />
                          </li>
                          <li className="cl-brown">
                            <img src="assets/img/sunglass/8.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/sunglass/11.jpg" alt="img" />
                          </li>
                          <li className="cl-wood">
                            <img src="assets/img/sunglass/14.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/2/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Cotton Shirt fot Men</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£85.00</span>
                          <span className="price-old">£99.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/shirt/2/1.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/2/4.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/shirt/2/7.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-5-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Double-breasted Blazer</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£32.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-1-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Ribbed Cotton Bodysuits
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£71.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-ash active">
                            <img
                              src="assets/img/product/800_1034/Image-1-1.jpg"
                              alt="img"
                            />
                          </li>
                          <li className="cl-light-white">
                            <img
                              src="assets/img/product/800_1034/Image-1-2.jpg"
                              alt="img"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-4"
                  role="tabpanel"
                  aria-labelledby="nav-4-tab"
                >
                  <div className="products-wrapper">
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-2-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Fit Twill Shirt for Woman
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£62.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-3-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker discount">
                            {" "}
                            -25%
                          </span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Grand Atlantic Chukka Boots
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£24.00</span>
                          <span className="price-old">£32.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-4-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Women's Faux-Trim Shirt
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£84.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-16-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Soft Touch Interlock Polo
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£45.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/1/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Comfy Winter Shirt</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£55.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-pink active">
                            <img src="assets/img/shirt/1/1.jpg" alt="img" />
                          </li>
                          <li className="cl-light-white">
                            <img src="assets/img/shirt/1/3.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/shirt/1/5.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/1/7.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/pant/1/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Skinny Jeans Pant</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£45.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-navy active">
                            <img src="assets/img/pant/1/1.jpg" alt="img" />
                          </li>
                          <li className="cl-light-white">
                            <img src="assets/img/pant/1/4.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/pant/2/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker discount">
                            {" "}
                            -25%
                          </span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Men's Flat-Front Shorts
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£30.00</span>
                          <span className="price-old">£40.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/pant/2/1.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/pant/2/3.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/pant/2/5.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shoe/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Eastland Lumber Up Boots
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£38.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/3/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Men's Poplin Dress Shirt
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£25.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-yellow active">
                            <img src="assets/img/shirt/3/1.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/shirt/3/2.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/3/3.jpg" alt="img" />
                          </li>
                          <li className="cl-orange">
                            <img src="assets/img/shirt/3/4.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/bag/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Varsi Leather Bag</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£65.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/bag/1.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/bag/2.jpg" alt="img" />
                          </li>
                          <li className="cl-black">
                            <img src="assets/img/bag/3.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/product-img1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Ecomart Smart Watch</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£30.00</span>
                          <span className="price-old">£38.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/sunglass/2.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Ecomart Smart Glass</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£25.00</span>
                          <span className="price-old">£39.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-black active">
                            <img src="assets/img/sunglass/2.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/sunglass/5.jpg" alt="img" />
                          </li>
                          <li className="cl-brown">
                            <img src="assets/img/sunglass/8.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/sunglass/11.jpg" alt="img" />
                          </li>
                          <li className="cl-wood">
                            <img src="assets/img/sunglass/14.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img src="assets/img/shirt/2/1.jpg" alt="img" />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Cotton Shirt fot Men</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£85.00</span>
                          <span className="price-old">£99.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-brown active">
                            <img src="assets/img/shirt/2/1.jpg" alt="img" />
                          </li>
                          <li className="cl-navy">
                            <img src="assets/img/shirt/2/4.jpg" alt="img" />
                          </li>
                          <li className="cl-ash">
                            <img src="assets/img/shirt/2/7.jpg" alt="img" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-5-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">Double-breasted Blazer</a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£32.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="single-product">
                      <div className="product-image pos-rel">
                        <a href="shop-details.html" className="">
                          <img
                            src="assets/img/product/800_1034/Image-1-1.jpg"
                            alt="img"
                          />
                        </a>
                        <div className="product-action">
                          <a href="#" className="quick-view-btn">
                            <i className="fal fa-eye"></i>
                          </a>
                          <a href="#" className="wishlist-btn">
                            <i className="fal fa-heart"></i>
                          </a>
                          <a href="#" className="compare-btn">
                            <i className="fal fa-exchange"></i>
                          </a>
                        </div>
                        <div className="product-action-bottom">
                          <a href="cart.html" className="add-cart-btn">
                            <i className="fal fa-shopping-bag"></i>Add to Cart
                          </a>
                        </div>
                        <div className="product-sticker-wrapper">
                          <span className="product-sticker new">New</span>
                        </div>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <a href="shop-details.html">
                            Ribbed Cotton Bodysuits
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price-now">£71.00</span>
                        </div>
                        <ul className="product-color-nav">
                          <li className="cl-ash active">
                            <img
                              src="assets/img/product/800_1034/Image-1-1.jpg"
                              alt="img"
                            />
                          </li>
                          <li className="cl-light-white">
                            <img
                              src="assets/img/product/800_1034/Image-1-2.jpg"
                              alt="img"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-area-btn mt-10 text-center">
                <a href="shop.html" className="border-btn">
                  View All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product area end */}
    </>
  );
};

export default HomeProductTab;
