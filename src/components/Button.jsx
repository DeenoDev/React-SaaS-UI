import React from "react";
import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName }) => {
  return href ? (
    <a
      href=""
      className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}
    ></a>
  ) : (
    <button className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}>
      TEXT
    </button>
  );
};

export default Button;