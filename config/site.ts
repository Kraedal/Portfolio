export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jacob Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "/pricing",
    },
    {
      label: "Skills",
      href: "/blog",
    },
    {
      label: "Achievements",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/Kraedal",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  images: {
    profile: "../assets/profile.png",
  },
  projects: [
    {
      title: "My Portfolio",
      subtitle: "My first personal portfolio.",
      image: "../assets/portfolio.png",
      link: "https://github.com/Kraedal/First-Portfolio",
    },
    {
      title: "Voting Website Project",
      subtitle: "A voting website project.",
      image: "/assets/voting.gif",
    }
  ],
};
