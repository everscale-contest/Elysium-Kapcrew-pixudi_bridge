import React from "react";
import "./FonImage.module.scss";

interface IFonImageProps {
  children?: any;
}

export const FonImage: React.FC<IFonImageProps> = ({ children = <></> }) => {
  return (
    <div className="fon">
      <div>{children}</div>
    </div>
  );
};
