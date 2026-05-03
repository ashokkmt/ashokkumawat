export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio Theme using Astro",
    techs: ["Astro", "Cloudflare", "Tailwind"],
    link: "https://github.com/ashokkmt/ashokkumawat",
  },
  {
    title: "Critique AI",
    techs: ["Flask", "Google Cloud", "AI", "Google GDG"],
    link: "https://github.com/ashokkmt/critiqueai",
  },
  {
    title: "SketchCode",
    techs: ["ReactFlow", "Cloudflare", "TailwindCSS", "HackaHolic 3.0"],
    link: "https://github.com/ashokkmt/SketchCode",
  },
  {
    title: "HomeSphere",
    techs: ["React", "Node.js", "MongoDB", "Cloud"],
    link: "https://github.com/ashokkmt/homesphere",
  },
  {
    title: "Civic Connect",
    techs: ["Full Stack", "Real-time", "MongoDB"],
    link: "https://github.com/ashokkmt/civic-connect",
  },
];

export default projects;
