/**
 * External dependencies
 */
import React, { useState } from "react";
import classNames from "classnames";
import Switch from "react-switch";

/**
 * Internal dependencies
 */
import TabIcon from "ece/components/tab-icon";
import ProductCard from "ece/components/product-card";
import products from "./list.json";

/**
 * Styles dependencies
 */
import styles from "./index.module.css";

function HomePage() {
  const [visible, setVisible] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <>
      <div className={styles["header"]}>
        <img src="./images/logo.jpeg" className={styles["logo"]} />
        {/* <div>
          <Switch
            onChange={handleChange}
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
          />
          <div className={styles["product-type"]}>(Sunglasses)</div>
        </div> */}
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
        <div className={styles["contact-us"]}>
          <a
            href={`https://wa.me/919653181580?text=${encodeURI(
              "i am interested in your sunglasses and eyeglasses"
            )}`}
            target="_blank"
          >
            Contact Us
          </a>
        </div>
        <img src="./images/logo.jpeg" />
        <div className={styles["comming-soon"]}>Coming Soon</div>
        <TabIcon
          icon="x"
          className={styles["drawer-close"]}
          onClick={() => setVisible(false)}
        />
      </div>
      <div className={styles["filter-sort-wrapper"]}>
        <div className={styles["filter-sort-sub-wrapper"]}>
          <div
            className={styles["sort-wrapper"]}
            onClick={() => setShowFilter(true)}
          >
            <TabIcon icon="arrows-sort" />
            <div>SORT</div>
          </div>
          <div className={styles["filter-divider"]}></div>
          <div
            className={styles["filter-wrapper"]}
            onClick={() => setShowFilter(true)}
          >
            <TabIcon icon="adjustments-horizontal" />
            <div>FILTER</div>
          </div>
        </div>
      </div>
      <div
        className={classNames(styles["filter-section-wrapper"], {
          [styles["filter-section-open"]]: showFilter,
        })}
      >
        <img src="./images/logo.jpeg" className={styles["image"]} />
        <div className={styles["comming-soon"]}>Coming Soon</div>
        <TabIcon
          icon="x"
          className={styles["drawer-close"]}
          onClick={() => setShowFilter(false)}
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
