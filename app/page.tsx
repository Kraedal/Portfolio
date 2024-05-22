import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { AboutMe } from "@/components/about-me";
import { Jumbotron } from "@/components/jumbotron";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Jumbotron />
      <AboutMe />
      <Projects />

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <Achievements />
    </section>
  );
}
