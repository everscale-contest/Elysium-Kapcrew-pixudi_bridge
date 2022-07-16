import React from "react";
import { SvgBorderAvatar } from "./svgBorderAvatar";
import { SvgBorderAvatarActive } from "./svgBorderAvatarActive";
import styles from "./Avatar.module.scss";

interface IAvatarProps {
  image: any;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  borderActive?: boolean;
  type?: "default" | "profile"
}

export const Avatar: React.FC<IAvatarProps> = ({ image, onClick, style, borderActive = false, type = "default" }) => {
  switch (type) {
    case "default":
      return (
        <div className={styles.avatar} onClick={onClick} style={style}>
          <img src={image} alt="" />
          {!borderActive ?
            <div className={styles.border}>
              <SvgBorderAvatar />
            </div> :
            <div className={styles.borderActive}>
              <SvgBorderAvatarActive />
            </div>}

        </div>
      );
    case "profile":
      return (
        <div className={styles.avatarProfile} onClick={onClick} style={style}>
          <img src={image} alt="" />

          <div className={styles.borderProfile}>
            <SvgBorderAvatar />
          </div>

        </div>
      );


  }

};
