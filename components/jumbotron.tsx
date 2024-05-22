import React from "react";
import { Spacer } from "@nextui-org/spacer";

import { title } from "@/components/primitives";

export const Jumbotron = () => {
  return (
    <div className="inline-block max-w-lg text-center justify-center mb-64 mt-48">
      <Spacer y={2} />
      <h1 className={title({ size: "lg" })}> Keep&nbsp;</h1>
      <h1 className={title({ color: "pink", size: "lg" })}>Exploring&nbsp;</h1>
      <Spacer y={2} />
      <h1 className={title({ size: "lg" })}>the world is</h1>
      <Spacer y={2} />
      <h1 className={title({ color: "pink", size: "lg" })}>
        {" "}
        waiting...&nbsp;
      </h1>
      <Spacer y={3} />
    </div>
  );
};
