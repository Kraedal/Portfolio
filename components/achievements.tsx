import React from "react";
import { Spacer } from "@nextui-org/spacer";
import { Image } from "@nextui-org/image";

import { title, subtitle } from "@/components/primitives";

export const Achievements = () => {
  return (
    <section id="about">
      <Spacer y={2} />
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className={title()}>Achievements</h1>
        <Spacer y={2} />
        <p className={subtitle()}>Here is one of my achievements where </p>
        <p className={subtitle()}>I designed the prototype of our application.</p>
      </div>
      <br />
      <Spacer y={2} />
      <Image
        isBlurred
        alt="Startup Champions"
        className=" align-items: center ml-28 mr-28 "
        src="https://shorturl.at/DEj2y"
        width={500}
      />
    </section>
  );
};
