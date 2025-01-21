/**
 * External dependencies
 */
import React, { useState } from "react";
import classNames from "classnames";

/**
 * Internal dependencies
 */
import TabIcon from "ece/components/tab-icon";

/**
 * Styles dependencies
 */
import styles from "./index.module.css";
import ProductCard from "ece/components/product-card";

function HomePage() {
  const [visible, setVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 2,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 3,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 4,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 5,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 6,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 7,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 8,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 9,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
    {
      id: 10,
      name: "Vicent Change Online",
      brand_name: "Eye Care Expert",
      original_price: 2000,
      discounted_percentage: 60,
      final_price: 800,
      images: ["./images/demo.png", "./images/demo.png", "./images/demo.png"],
    },
  ];

  return (
    <>
      <div className={styles["header"]}>
        <img src="./images/logo.jpeg" className={styles["logo"]} />
        <TabIcon
          icon="menu-2"
          color={"#FFF"}
          onClick={() => setVisible(true)}
        />
      </div>
      <div
        className={classNames(styles["drawer-wrapper"], {
          [styles["drawer-open"]]: visible,
        })}
      >
        <div>Coming Soon</div>
        <TabIcon
          icon="x"
          className={styles["drawer-close"]}
          onClick={() => setVisible(false)}
        />
      </div>
      <div className={styles["container"]}>
        {products.map((item, key) => (
          <div key={key}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
