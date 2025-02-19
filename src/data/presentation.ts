type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "rishabkumar7@gmail.com",
  title: "Hi, I’m Rishab 👋",
  //profile: "/profile.webp",
  description:
    "I am a *Staff Developer Evangelist at Twilio*, have worked previously as Cloud, DevOps and Solutions Engineer and have been in the tech industry for *6 years*. I am passionate about helping people get into cloud and sharing my learnings in Cloud, DevOps and now Developer Relations.",
  socials: [
    {
      label: "YouTube",
      link: "https://youtube.com/@rishabincloud",
    },
    {
      label: "X",
      link: "https://twitter.com/rishabincloud",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/rishabkumar7",
    },
    {
      label: "GitHub",
      link: "https://github.com/rishabkumar7",
    },
    {
      label: "Bento",
      link: "https://bento.me/rishabincloud",
    },
  ],
};

export default presentation;
