import React, { MouseEventHandler, useContext, useEffect } from "react";
import styles from "./Header.module.scss";
import cl from "classnames";

// import { Context } from "../..";

// import { useHistory } from "react-router-dom";

// import { ButtonTransparent } from "../buttonTransparent/button/ButtonTransparent";
import { Logo } from "./logo/Logo";
// import { useNearWallet } from "../../near/near.hook";
import duck from "./duck.png";
import { Avatar } from "../avatar/Avatar";



export function HeaderP() {
  // const { store, storeRooms } = useContext(Context);
  // const history = useHistory();
  // const wallet = useNearWallet();

  const logout = () => {
    // wallet.signOut();
    // store.logout();

    window.open("https://game.pixudi.com/menu");
  };



  return (
    // <div>
    <div className={cl(styles.header, styles.container)}>
      <Logo />

      <div className={styles.btnLeft}>
        <div className={styles.account} onClick={logout}>
          <Avatar image={duck} />

          <div className={styles.walletId}>{"Wallet"}</div>
        </div>
        {/* <div className={styles.walletId}> */}
        {/* {store.wallet}
            {store.isAuth} */}
        {/* {store.isAuth ? store.wallet : "АВТОРИЗУЙТЕСЬ"} */}
        {/* </div> */}

        {/* <button onClick={logout}>Logout</button>
          <button
            onClick={() => {
              navigate("/games");
            }}
          >
            Game
          </button> */}
        {/* <ButtonTransparent title={"PROFILE"} /> */}

      </div>
    </div>
    // </div>
  );
};
