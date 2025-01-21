/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */

/**
 * Styles dependencies
 */
import style from "./index.module.css";

function ProductCard({ item }) {
  const {
    name,
    brand_name,
    original_price,
    discounted_percentage,
    final_price,
    images,
  } = item;

  const onBuyNowClick = () => {
    window.open("https://wa.me/919653181580?text=test.", "_blank");
  };

  const renderImages = () => {
    return images.map((ele, key) => (
      <img key={key} src={ele} className={style["image"]} />
    ));
  };

  return (
    <div className={style["wrapper"]}>
      <span className={style["bestseller-tag"]}>BestSeller</span>
      <div className={style["images-wrapper"]}>{renderImages()}</div>
      <div className={style["info-wrapper"]}>
        <div className={style["title"]}>{name}</div>
        <div className={style["brand-name"]}>({brand_name})</div>
        <div className={style["desc-wrapper"]}>
          <div>
            <div className={style["original-price-wrapper"]}>
              <div className={style["original-price"]}>₹{original_price}</div>
              <div className={style["discount-percentage"]}>
                ({discounted_percentage}% OFF)
              </div>
            </div>
            <div className={style["final-price-wrpper"]}>
              <div className={style["final-price"]}>₹{final_price}</div>
              <div className={style["without-lenses-text"]}>
                (without lenses)
              </div>
            </div>
          </div>
          <div>
            <div className={style["buy-now-btn"]} onClick={onBuyNowClick}>
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
