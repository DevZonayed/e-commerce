import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTitle from "../../layouts/PageTitle/PageTitle";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import swal from "@sweetalert/with-react";
const SingleProduct = () => {
  // Getting Id From Product
  const product_id = useParams();
  //Getting Product And Loading Script Start Here
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `http://localhost:5000/products?slug=${product_id.id}&_embed=veriations`
      )
      .then((res) => {
        setProduct({ ...res.data[0] });
        setIsLoaded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product_id.id]);
  //Getting Product And Loading Script End Here
  // Cart Script Start Here
  const [cartQ, setCartQ] = useState(1);
  // Cart Script End Here

  //Total Price State start here
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(product.nowPrice * cartQ);
  }, [cartQ, product.nowPrice]);
  //Total Price State End Hwere
  // Product Image Handle Script Start Here
  const [featureUrl, setFeatureUrl] = useState("");
  useEffect(() => {
    setFeatureUrl(product.featuredImage);
  }, [product.featuredImage]);

  /**
   * Faq Handle Script Start Here
   */
  // Product Details Tab Menagement Start Here
  const [faqTabItem, setFaqTabItem] = useState("description");
  // Product Details Tab Menagement End Here

  /**
   * Faq Handle Script End Here
   */
  // Product Gellary Image Nav Image Menagement
  const [glaImage, setGlaImage] = useState([]);
  useEffect(() => {
    let gelarryImages = [];
    if (Object.keys(product).length !== 0) {
      product.veriations.length !== 0 ? (
        product.veriations[0].verdata.map((singleImage, index) =>
          gelarryImages.push(singleImage.data.image)
        )
      ) : (
        <></>
      );
    }
    setGlaImage(gelarryImages);
  }, [product]);

  // Product gellary Slider Nav State Here
  const [gCount, setGCount] = useState(0);
  const [showImage, setShowImage] = useState([]);
  useEffect(() => {
    if (glaImage.length > 4) {
      let allImages = [...glaImage];
      let showImg = allImages.splice(gCount, 4);
      setShowImage(showImg);
    } else {
      let allImages = [...glaImage];
      setShowImage(allImages);
    }
  }, [glaImage, gCount, featureUrl]);
  // Product Image Handle Script End Here

  return (
    <>
      {/* Page Title Start Here */}
      <PageTitle title="Shop" itemTitle={product.name} />
      {/* Page Title End Here */}
      {/* Shop Details Area Start Here */}

      <section className="shop-details-area pt-120 pb-90">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details-tab-wrapper mb-30">
                <div className="product-details-tab">
                  <div className="tab-content" id="productDetailsTab">
                    <div
                      className="tab-pane fade active show"
                      id="pro-1"
                      role="tabpanel"
                      aria-labelledby="pro-1-tab"
                    >
                      <img className="active" src={featureUrl} alt="..." />
                    </div>
                  </div>
                </div>
                <div className="product-details-nav">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {gCount === 0 || glaImage.length <= 4 ? (
                      <></>
                    ) : (
                      <button
                        onClick={() => {
                          setGCount(gCount - 1);
                        }}
                        className="p_g_s_btn"
                      >
                        <i className="bx bxs-left-arrow-circle"></i>
                      </button>
                    )}
                    {showImage
                      ? showImage.map((singleVeriant, index) => (
                          <li
                            key={index}
                            className="nav-item"
                            role="presentation"
                          >
                            <button
                              onClick={() => {
                                setFeatureUrl(singleVeriant);
                              }}
                              className={
                                singleVeriant === featureUrl
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              type="button"
                            >
                              <img src={singleVeriant} alt="..." />
                            </button>
                          </li>
                        ))
                      : ""}
                    {gCount + 4 === glaImage.length || glaImage.length <= 4 ? (
                      <></>
                    ) : (
                      <button
                        onClick={() => {
                          setGCount(gCount + 1);
                        }}
                        className="p_g_s_btn"
                      >
                        <i className="bx bxs-right-arrow-circle"></i>
                      </button>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-side-info mb-30">
                <h4 className="product-name mb-10">
                  {isLoaded ? <Skeleton /> : product.name}
                </h4>
                <span className="singlePrice">
                  {isLoaded ? (
                    <Skeleton />
                  ) : (
                    <>
                      <span className="product-price">${product.nowPrice}</span>
                      {product.oldPrice ? (
                        <span className="product-price">
                          {" "}
                          -{" "}
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "gray",
                            }}
                          >
                            ${product.oldPrice}
                          </span>
                        </span>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </span>
                <p className="mb-30">
                  {isLoaded ? <Skeleton count={3} /> : <>{product.shortDes}</>}
                </p>
                <div className="finalPrice">
                  <h4 className="mb-3">Total : ${total}</h4>
                </div>
                {/* <div className="available-sizes">
                  <span>Available Sizes : </span>
                  <div className="product-available-sizes">
                    <span>SM</span>
                    <span>L</span>
                    <span>Xl</span>
                    <span>XXl</span>
                  </div>
                </div> */}
                <div className="product-quantity-cart mb-25">
                  <div className="product-quantity-form">
                    <form>
                      <div
                        onClick={() => {
                          cartQ > 1
                            ? setCartQ(cartQ - 1)
                            : swal({
                                title: "Opps",
                                text: "Min Quantity is 1",
                              });
                        }}
                        className="cart-minus btn btn-sm"
                      >
                        <i className="far fa-minus"></i>
                      </div>
                      <input className="cart-input" value={cartQ} />
                      <div
                        onClick={() => {
                          cartQ <= 9
                            ? setCartQ(cartQ + 1)
                            : swal({
                                title: "Opps",
                                text: "Max Quantity is 10",
                              });
                        }}
                        className="cart-plus btn btn-sm"
                      >
                        <i className="far fa-plus"></i>
                      </div>
                    </form>
                  </div>
                  <a href="cart.html" className="fill-btn">
                    Add to Cart
                  </a>
                </div>
                <a href="wishlist.html" className="border-btn">
                  Add to Wishlist
                </a>
                <div className="product__details__tag tagcloud mt-25 mb-10">
                  <span>Tags : </span>
                  {product.tags ? (
                    <>
                      {product.tags.map((tags, index) => (
                        <a key={index} href="/" rel="tag">
                          {tags}
                        </a>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Faq Section Start here */}
          <div className="product_info-faq-area pb-0">
            <div className="">
              <nav className="product-details-nav">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setFaqTabItem("description")}
                    className={
                      faqTabItem === "description"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Description
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setFaqTabItem("reviews")}
                    className={
                      faqTabItem === "reviews"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link "
                    }
                  >
                    Reviews
                  </div>
                </div>
              </nav>
              <div
                className="tab-content product-details-content"
                id="nav-tabContent"
              >
                <div
                  className={
                    faqTabItem === "description"
                      ? "tab-pane fade active show"
                      : "tab-pane fade"
                  }
                >
                  <div className="tabs-wrapper mt-35">
                    <div className="product__details-des">
                      <p>
                        Very clean and organized with easy to follow tutorials,
                        Exercises, and solutions. This course does start from
                        the beginning with very little knowledge and gives a
                        great overview of common tools used for data science and
                        progresses into more complex concepts and ideas. This
                        course is amazing..! I started this course as a beginner
                        and learnt a lot. Instructors are great. Query handling
                        can be improved.Overall very happy with the course.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    faqTabItem === "reviews"
                      ? "tab-pane fade active show"
                      : "tab-pane fade"
                  }
                >
                  <div className="tabs-wrapper mt-35">
                    <div className="course-review-item mb-30">
                      <div className="course-reviews-img">
                        <a href="/">
                          <img
                            src="https://themepure.net/html/ecomart-prev/ecomart/assets/img/testimonial/course-reviews-1.png"
                            alt="not found"
                          />
                        </a>
                      </div>
                      <div className="course-review-list">
                        <h5>
                          <a href="#">Sotapdi Kunda</a>
                        </h5>
                        <div className="course-start-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>55 min ago</span>
                        </div>
                        <p>
                          Very clean and organized with easy to follow
                          tutorials, Exercises, and solutions. This course does
                          start from the beginning with very little knowledge
                          and gives a great overview of common tools used for
                          data science and progresses into more complex concepts
                          and ideas.
                        </p>
                      </div>
                    </div>

                    <div className="product__details-comment">
                      <div className="comment-title mb-20">
                        <h3>Add a review</h3>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                      </div>
                      <div className="comment-rating mb-20">
                        <span>Overall ratings</span>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="comment-input-box mb-20">
                        <form action="#">
                          <div className="row">
                            <div className="col-xxl-12">
                              <textarea
                                placeholder="Your review"
                                className="comment-input comment-textarea mb-20"
                              ></textarea>
                            </div>
                            <div className="col-xxl-6">
                              <div className="comment-input mb-20">
                                <input type="text" placeholder="Your Name" />
                              </div>
                            </div>
                            <div className="col-xxl-6">
                              <div className="comment-input mb-20">
                                <input type="email" placeholder="Your Email" />
                              </div>
                            </div>
                            <div className="col-xxl-12">
                              <div className="comment-submit">
                                <button type="submit" className="fill-btn">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Details Area End Here */}
    </>
  );
};

export default SingleProduct;
