import React from "react";
import { Element } from "react-scroll";

const Pricing = () => {
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-[950px] border-2 border-red-500">
            <h3 className="h3 max-lg:h4 max-md:h5 ">
              Flexible pricing for teams of all sizes.
            </h3>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
