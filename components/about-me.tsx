import React from "react";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

import { title, subtitle } from "@/components/primitives";

export const AboutMe = () => {
  return (
    <section className="flex flex-row" id="about">
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
          src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/414203337_1085360419146689_2554317155910311676_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZUGKIKojMxIQ7kNvgHpBXkK&_nc_ht=scontent.fmnl33-2.fna&oh=00_AYD467ktUV0H_QFIXCDoGkWAZoNWMafFhwppEoPIfmxXVw&oe=665C516D"
          width={300}
        />
      </div>
      <Spacer y={2} />
    </section>
  );
};
