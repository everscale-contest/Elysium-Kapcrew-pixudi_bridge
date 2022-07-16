import React, { MouseEventHandler } from "react";
import styles from "./Logo.module.scss";
import LogoLine from "./LogoLine.svg"


export const Logo: React.FC = () => {
  return (
      <div className={styles.logo} >
          PIXUDI
          <img src={LogoLine} alt="" />
      </div>

  );
};
