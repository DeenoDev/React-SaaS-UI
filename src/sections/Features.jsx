import React from "react";
import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex">{features.map()}</div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
