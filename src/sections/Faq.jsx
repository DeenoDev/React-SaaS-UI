import React from "react";
import { Element } from "react-scroll";

const Faq = () => {
  return (
    <section>
      <Element name="faq" className="relative">
        <div>
          <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
            Curiosity didn't kill the cat, it gave it answers.
          </h3>
          <p className="body-1 max-lg:max-w-sm">
            You've got quetions, we've got answers.
          </p>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
