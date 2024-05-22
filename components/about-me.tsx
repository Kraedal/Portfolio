import React from "react";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

import { title, subtitle } from "@/components/primitives";

export const AboutMe = () => {
  return (
    <section className="flex flex-row">
      <Spacer y={2} />
      <div className="basis-1/2 ml-32 m-8 pr-8 text-center justify-center">
        <h1 className={title()}>About&nbsp;</h1>
        <h1 className={title({ color: "pink" })}>me&nbsp;</h1>
        <Spacer y={2} />
        <p className={subtitle()}>
          I am a third year computer science student at the University of Saint
          Louis Tuguegarao. I love designing websites and mobile applications. I
          aspire to become a software engineer in the future.
        </p>
      </div>
      <Spacer y={2} />
      <div className="basis-1/2 justify-content: center m-10">
        <Image
          isBlurred
          alt="NextUI hero Image"
          height={300}
          loading="eager"
          src="https://t.ly/lz1t5"
          width={300}
        />
      </div>
    </section>
  );
};
