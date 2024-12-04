import React from "react";
import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative z-2 md:px-2 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start"></div>
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
