import React from "react";
import styles from "./Navlink.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Navlink({ link }) {
  return (
    <div className={cx("nav-link")}>
      <a href="/">Home</a> &nbsp; &gt; &nbsp; {link.parent} &nbsp; &gt; &nbsp;{" "}
      {link.children}
    </div>
  );
}

export default Navlink;
