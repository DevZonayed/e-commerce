import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingleProductView.css";

const SingleProductView = (props) => {
  const product = { ...props.ProductObj };
  const [productObj, setProductObj] = useState(product);
  const handleFicherImage = (img) => {
    setProductObj({ ...productObj, featuredImage: img });
  };
  /**
   * Image LoadTime Calculate
   */
  const [imgLoad, setImgLoad] = useState(true);

  const handleFeatureLoad = () => {
    setTimeout(() => {
      setImgLoad(false);
    }, 200);
  };
  return (
    <>
      <div key={props.index} className="single-product">
        <div className="product-image pos-rel">
          <div
            style={imgLoad ? {} : { display: "none" }}
            className="p_image_loading_container"
          >
            <svg className="p_image_loading" viewBox="0 0 50 50">
              <circle className="ring" cx="25" cy="25" r="20"></circle>
              <circle className="ball" cx="25" cy="5" r="3.5"></circle>
            </svg>
          </div>

          <Link to={`/productdetails/${product.slug}`} className="">
            <img
              style={!imgLoad ? {} : { display: "none" }}
              src={productObj.featuredImage}
              onLoad={() => handleFeatureLoad(props.index)}
              alt="ProductImage"
            />
          </Link>
          <div className="product-action">
            <a href="/#" className="quick-view-btn">
              <i className="fal fa-eye"></i>
            </a>
            <a href="/#" className="wishlist-btn">
              <i className="fal fa-heart"></i>
            </a>
            <a href="/#" className="compare-btn">
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
            {productObj.oldPrice !== false ? (
              <>
                <span className="product-sticker bg-info">
                  -{" "}
                  {Math.floor(
                    ((productObj.oldPrice - productObj.nowPrice) /
                      productObj.oldPrice) *
                      100
                  )}
                  %
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="product-desc">
          <div className="product-name">
            <Link to={`/productdetails/${product.id}`}>{productObj.name}</Link>
          </div>
          <div className="product-price">
            {productObj.oldPrice !== false ? (
              <>
                <span className="price-now">${productObj.nowPrice}</span>
                <span className="price-old">${productObj.oldPrice}</span>
              </>
            ) : (
              <>
                <span className="price-now">${productObj.nowPrice}</span>
              </>
            )}
          </div>
          <ul className="product-color-nav">
            {productObj.veriations
              ? productObj.veriations.map((allver) =>
                  allver.verdata.map((singlever, index) => (
                    <li
                      title={singlever.data.colorName}
                      style={
                        singlever.data.image === productObj.featuredImage
                          ? {
                              transform: `scale(1.4)`,
                            }
                          : {}
                      }
                      key={index}
                      onClick={() => {
                        if (singlever.data.image === productObj.featuredImage) {
                          return false;
                        } else {
                          handleFicherImage(singlever.data.image);
                          setImgLoad(true);
                        }
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: singlever.data.color,
                        }}
                        className="after"
                      ></span>
                    </li>
                  ))
                )
              : ""}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleProductView;
