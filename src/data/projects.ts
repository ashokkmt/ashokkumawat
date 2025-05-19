export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio Theme using Astro",
    techs: ["Astro", "Cloudfare", "Tailwind"],
    link: "https://github.com/ashokkmt/ashokkumawat",
  },
  {
    title: "Critique AI",
    techs: ["Flask", "Google Cloud", "AI", "Google GDG"],
    link: "https://github.com/ashokkmt/critiqueai",
  },
  {
    title: "SketchCode",
    techs: ["ReactFlow", "Cloudfare", "TailwindCSS", "HackaHolic 3.0"],
    link: "https://github.com/ashokkmt/SketchCode",
  },
];

export default projects;
