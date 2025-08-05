import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: {
      url: "/chat-app.png",
      altText:"Real time Chat app"
    },
    _id: "6853e4fbecf9395e838e5920",
    title: "chat app",
    description:
      "Real-time chat app using MERN stack and Socket.io for instant messaging, typing status, and user presence.",
    github_link: "https://github.com/Aryanjast13/Chat-app",
    live_link: "https://chat-app-os5i.onrender.com/",
    tools: [
      { id: "2786331913", text: "MONGODB", _id: "686900b84122da39794ed554" },
      { id: "1168352528", text: "REACT", _id: "686900b84122da39794ed555" },
      { id: "1603495363", text: "NODEJS", _id: "686900b84122da39794ed556" },
      { id: "3133873078", text: "TYPESCRIPT", _id: "686900b84122da39794ed557" },
      { id: "818015348", text: "TAILWIND", _id: "686900b84122da39794ed558" },
    ],
    order: 0,
  },
  {
    image: {
      url: "/E-commerce.png",
      altText:"E-commerce"
    },
    _id: "6868ffbd4122da39794ed529",
    title: "E-commerce",
    description:
      "Full-stack e-commerce app with MERN, Redis caching, debounced search, and secure payment gateway integration.",
    github_link: "https://github.com/Aryanjast13/Ecommmerce",
    live_link: "https://ecommmerce-4ste.vercel.app",
    tools: [
      { id: "1238054244", text: "REACT", _id: "68690106ebcb8833299efd29" },
      { id: "518012951", text: "NODE", _id: "68690106ebcb8833299efd2a" },
      { id: "2585719026", text: "JAVASCRIPT", _id: "68690106ebcb8833299efd2b" },
      { id: "4240304071", text: "MONGODB", _id: "68690106ebcb8833299efd2c" },
      { id: "1170645452", text: "TAILWIND", _id: "68690106ebcb8833299efd2d" },
    ],
    order: 0,
  },
  {
    image: {
      url: "/Mojito.png",
      altText:"GsapCocktails"
    },
    _id: "6883b29fd13cba9e8b49c885",
    title: "GsapCocktails",
    description:
      "An immersive, animated cocktails landing page with smooth transitions and engaging, interactive user experience.",
    github_link: "https://github.com/Aryanjast13/Gsap_cocktails",
    live_link: "https://gsap-cocktails-taupe.vercel.app/",
    tools: [
      { id: "y9b6cp", text: "React", _id: "6883b29fd13cba9e8b49c886" },
      { id: "2rk89n", text: "Tailwind Css", _id: "6883b29fd13cba9e8b49c887" },
      { id: "1287203361", text: "Gsap", _id: "6883b29fd13cba9e8b49c888" },
    ],
    order: 0,
  },
  {
    image: {
      url: "/Refokus.png",
      altText:"Refokus"
    },
    _id: "6883b381d13cba9e8b49c89a",
    title: "Refokus",
    description:
      "A modern digital agency site with interactive UI, smooth animations, and a clean, user-friendly design system.",
    github_link: "https://github.com/Aryanjast13/Refokus",
    live_link: "https://refokus-woad.vercel.app/",
    tools: [
      { id: "y9b6cp", text: "React", _id: "6883b381d13cba9e8b49c89b" },
      { id: "2rk89n", text: "Tailwind Css", _id: "6883b381d13cba9e8b49c89c" },
      {
        id: "3845066951",
        text: "Framer Motion",
        _id: "6883b381d13cba9e8b49c89d",
      },
    ],
    order: 0,
  },
];



const Project = ({ scrollRef }) => {
  return (
    <div
      ref={scrollRef}
      className="project w-full border py-6 border-transparent px-12"
    >
      <div>
        <h2 className="text-5xl italic mb-20">Personal Projects</h2>
        {
          projects.map((project) => (
            <ProjectCard key={project._id} project={project}  />
          ))
        }
        
      </div>
    </div>
  );
};

export default Project