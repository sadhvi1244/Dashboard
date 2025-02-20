import React from "react";
import { Icon } from "@iconify/react";

const IconifyIcon = ({ icon, width, height, className, ...rest }) => {
  return (
    <Icon
      icon={icon}
      width={width}
      height={height}
      className={`inline-block ${className}`}
      {...rest}
    />
  );
};

export default IconifyIcon;
