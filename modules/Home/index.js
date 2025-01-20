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

function HomePage() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles["header"]}>
        <img src="/images/logo.jpeg" className={styles["logo"]} />
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
        <div>coming soon</div>
        <TabIcon
          icon="x"
          className={styles["drawer-close"]}
          onClick={() => setVisible(false)}
        />
      </div>
    </>
  );
}

export default HomePage;
