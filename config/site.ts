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
      href: "#projects",
    },
    {
      label: "Achievements",
      href: "#achievements",
    },
  ],
  links: {
    github: "https://github.com/Kraedal",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://ko-fi.com/ceino",
  },
  images: {
    profile: "../assets/profile.png",
  },
  projects: [
    {
      title: "My Portfolio",
      subtitle: "My first portfolio.",
      image:
        "https://i.pinimg.com/originals/49/26/d0/4926d0e31b0a1cb36ab126a2f28b2185.jpg",
      link: "https://github.com/Kraedal/First-Portfolio",
      description: "Using HTML, CSS, and JavaScript.",
    },
    {
      title: "Voting Website",
      subtitle: "A voting website project.",
      image:
        "https://i.pinimg.com/originals/d7/16/24/d7162489c7928ad6a2a31dbf852a8d77.jpg",
      link: "https://github.com/Kraedal/voting-website",
      description: "Using HTML, CSS, JS, PHP, and SQL",
    },
    {
      title: "UI/UX Design",
      subtitle: "Using Figma",
      image:
        "https://i.pinimg.com/originals/c1/14/bd/c114bd91ace1a61a5e5a0d7f283ae7bf.png",
      link: " https://www.figma.com/design/NUYnLEjRA6Qhqz7gmyyvcI/PanTreat?node-id=14%3A224&t=Z6c2k3RjRCLYzvIU-1",
      description: "A design for our startup.",
    },
  ],
};
