import React from "react";
import index from "./index";

const Chatgpt = (props) => {
  return (
    <React.Fragment>

      <div className="mt-2 text-center">
        <h1 className="font-medium text-sm md:text-xl underline underline-offset-8 text-dark">
          MAI - {props.title}
        </h1>
        <p className="text-xs md:text-base mt-3 text-dark">
          {props.description}
        </p>
      </div>

    </React.Fragment>
  );
};

export default Chatgpt;
