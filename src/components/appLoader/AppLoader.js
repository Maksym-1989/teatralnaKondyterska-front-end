import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import styles from "./AppLoader.module.css";

const AppLoader = () => {
  return (
    <div className={styles.loader}>
      <Loader
        style={styles}
        type="MutatingDots"
        color="blue"
        secondaryColor="green"
        height={150}
        width={150}
        radius={10}
      />
    </div>
  );
};

export default AppLoader;
