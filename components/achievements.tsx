import React from "react";
import { Spacer } from "@nextui-org/spacer";
import { Image } from "@nextui-org/image";

import { title, subtitle } from "@/components/primitives";

export const Achievements = () => {
  return (
    <section id="achievements">
      <Spacer y={2} />
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className={title()}>Achievements</h1>
        <Spacer y={2} />
        <p className={subtitle()}>Here is one of my achievements where </p>
        <p className={subtitle()}>
          I designed the prototype of our application.
        </p>
      </div>
      <br />
      <Spacer y={2} />
      <Image
        isBlurred
        alt="Startup Champions"
        className=" align-items: center ml-28 mr-28 "
        src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/380214327_627942309492085_5157818137266394632_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-u7ewNBYRNYQ7kNvgHesldV&_nc_ht=scontent.fmnl33-2.fna&oh=00_AYCaWQGseT-I9LIH39wuGyB5ftiyQBkBg5GLNCnJe6U_Tw&oe=665C6D9F"
        width={500}
      />
    </section>
  );
};
