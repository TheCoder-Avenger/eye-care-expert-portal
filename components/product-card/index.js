/**
 * External dependencies
 */
import React, { useState } from "react";
import classNames from "classnames";

/**
 * Internal dependencies
 */

/**
 * Styles dependencies
 */
import style from "./index.module.css";

function ProductCard({ item, setOpen, setdata }) {
  const {
    name,
    brand_name,
    original_price,
    discounted_percentage,
    final_price,
    demo_images = [
      "./images/demo.png",
      "./images/demo.png",
      "./images/demo.png",
    ],
    bestseller,
    shape,
    colour,
    general_size,
    material,
    size,
    key,
  } = item;

  const displayed_product_name = `Illumina ${capitalizeFirstLetter(
    shape
  )} ${capitalizeFirstLetter(colour)} ${capitalizeFirstLetter(
    general_size
  )} ${capitalizeFirstLetter(material)} (${size})`;

  function capitalizeFirstLetter(val) {
    return (
      String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase()
    );
  }

  const renderImages = () => {
    return demo_images.map((ele, key) => (
      <img key={key} src={ele} className={style["image"]} />
    ));
  };

  return (
    <div className={style["wrapper"]}>
      <span className={style["bestseller-tag"]}>
        {bestseller && "BestSeller"}
      </span>
      <div className={style["images-wrapper"]}>{renderImages()}</div>
      <div className={style["info-wrapper"]}>
        <div className={style["title"]}>{displayed_product_name}</div>
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
            <div
              className={style["buy-now-btn"]}
              onClick={() => {
                setOpen(true);
                setdata({ ...item, displayed_product_name });
              }}
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
