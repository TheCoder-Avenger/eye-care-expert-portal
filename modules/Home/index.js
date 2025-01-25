/**
 * External dependencies
 */
import React, { useState } from "react";
import classNames from "classnames";

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
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(null);
  const initialFormData = { name: "", contact: "" };
  const [formData, setFormdata] = useState(initialFormData);

  const onBuyNowClick = () => {
    if (formData?.name && formData?.contact) {
      window.open(
        `https://wa.me/8879046890?text=${`Hey Team Eye Car Expert, I want to buy ${data?.displayed_product_name} which has final price after discount ₹${data?.final_price}`} /- Details for contact me \n${
          formData?.name
        } ${formData?.contact}`,
        "_blank"
      );
    } else {
      window.open(
        `https://wa.me/8879046890?text=${`Hey Team Eye Car Expert, I want to buy ${data?.displayed_product_name} which has final price after discount ₹${data?.final_price}`} /-`,
        "_blank"
      );
    }
    setOpen(false);
    setFormdata(initialFormData);
  };

  const renderHeader = () => (
    <div className={styles["header"]}>
      <img src="./images/logo-trans2.png" className={styles["logo"]} />
      <TabIcon icon="menu-2" color={"#bwd"} onClick={() => setVisible(true)} />
    </div>
  );

  const renderDrawer = () => (
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
          Click here to contact us
        </a>
      </div>

      <img src="./images/logo.jpeg" />
      <div className={styles["comming-soon"]}>Coming Soon...</div>
      <div className={styles["contact-person"]}>
        Contact Us (Rahim Shaikh) <br /> +91 8879046890
      </div>
      <TabIcon
        icon="x"
        className={styles["drawer-close"]}
        onClick={() => setVisible(false)}
      />
    </div>
  );

  const renderFilterAndSortOptions = () => (
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
  );

  const renderFilterAndSortModal = () => (
    <div
      className={classNames(styles["filter-section-wrapper"], {
        [styles["filter-section-open"]]: showFilter,
      })}
    >
      <img src="./images/logo.jpeg" className={styles["image"]} />
      <div className={styles["comming-soon"]}>Coming Soon...</div>
      <div className={styles["contact-person"]}>
        Contact Us (Rahim Shaikh) <br /> +91 8879046890
      </div>
      <TabIcon
        icon="x"
        className={styles["drawer-close"]}
        onClick={() => setShowFilter(false)}
      />
    </div>
  );

  const renderProducts = () => (
    <div className={styles["container"]}>
      {products
        ?.sort((a, b) => b?.bestseller - a?.bestseller)
        ?.map((item, key) => (
          <div key={key}>
            <ProductCard
              item={{ ...item, key }}
              setOpen={setOpen}
              setdata={setdata}
            />
          </div>
        ))}
    </div>
  );

  const renderBottomSheet = () => (
    <div
      className={classNames(styles["bottom-sheet"], {
        [styles["bottom-open"]]: open,
      })}
    >
      <TabIcon
        icon="x"
        size={30}
        className={styles["bottom-close-icon"]}
        onClick={() => setOpen(false)}
      />
      <div className={styles["bottom-wrapper"]}>
        {data?.displayed_product_name}
        <form onSubmit={onBuyNowClick}>
          <div>
            <input
              value={formData?.name}
              placeholder="Enter your name"
              className={styles["input"]}
              onChange={(e) =>
                setFormdata({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <input
              value={formData?.contact}
              type="number"
              placeholder="Enter your contact number"
              className={styles["input"]}
              onChange={(e) =>
                setFormdata({
                  ...formData,
                  contact: e.target.value,
                })
              }
              required
            />
          </div>
          <button className={styles["continue-btn"]}>Buy</button>
        </form>
        <hr />
        <div className={styles["skip-btn"]} onClick={onBuyNowClick}>
          Continue without details
        </div>
        <div>
          <div className={styles["contact-person"]}>
            Need Help? Contact Us (Rahim Shaikh) <br /> +91 8879046890
          </div>
          {/* <div>Thank You for showing Intrest in our products</div> */}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderBottomSheet()}
      {renderHeader()}
      {renderDrawer()}
      {!open && renderFilterAndSortOptions()}
      {renderFilterAndSortModal()}
      {renderProducts()}
    </>
  );
}

export default HomePage;
