import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const skillData = [
  { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { category: "State Mgmt", skills: ["Redux", "Zustand"] },
  { category: "Backend", skills: ["Node.js", "Express"] },
  { category: "Databases", skills: ["MongoDB", "PostgreSQL"] },
  { category: "Languages", skills: ["JavaScript", "TypeScript"] },
  { category: "Tools", skills: ["VS Code", "Postman", "Figma"] },
  { category: "OS / DevOps", skills: ["Linux (Basics, CLI)"] },
];

const About = ({ scrollRef }) => {
   gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".about", // your section selector
      pin: true, // pin the trigger element
      start: "top top", // when section top hits viewport top
      end: "+=1119px", // how long it stays pinned (e.g., one viewport height)
      pinSpacing: false, // add spacing so layout doesn’t jump
      // scrub: true, // uncomment if you want scrubbed animations tied to scroll
      markers: false,// uncomment for debugging
      anticipatePin: 1,
    });
      
    })

  return (
    <section ref={scrollRef} className="about w-full pb-15 md:pb-40 px-4  md:px-12 relative z-10">
      <h2 className="text-4xl md:text-7xl pt-3 md:py-6">About Me</h2>
      <div className="flex flex-col md:flex-row mt-2 md:mt-16 ">
        <div className="w-full md:w-1/2  p-4">
          <p className="text-lg md:text-xl mb-2">
            <span className="text-xl md:text-2xl italic"> Hey there! </span> I'm Aryan, a
            full-stack web developer who loves building functional,
            problem-solving apps that do more than just look good — they work
            seamlessly.
          </p>
          <p className="text-lg md:text-xl mb-2">
            From turning an idea into a working product to debugging weird edge
            cases at 2AM, I enjoy every part of the process. I work mostly with
            the MERN stack, but I’m always exploring new tools and learning how
            things work under the hood — whether it's authentication flows,
            real-time sockets, or performance tweaks.
          </p>
          <p className="text-lg md:text-xl mb-2">
            I believe in "learning in public", sharing progress, and building
            cool things — not just perfect ones. If you like shipping fast,
            learning faster, and making ideas real — we'll get along great.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-20 pt-5 ">
          <h3 className="text-3xl md:ml-10 italic font-medium ">Skills</h3>

          <div className="overflow-x-auto ml-2 md:pl-10  mt-6">
            <table className="table-auto w-full">
              <tbody>
                {skillData.map((data, index) => (
                  <tr key={index}>
                    <th className="text-left text-lg  px-4 py-2 align-top w-1/4 font-semibold text-gray-800">
                      {data.category}
                    </th>
                    <td className="text-lg">{data.skills.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 md:mt-0 ">
        <h3 className="text-4xl italic font-medium">Education</h3>
        <p className="text-xl md:text-2xl mt-2 md:mt-6 pl-6 md:pl-0">Bacherlors of Computer Applications</p>
        <div className=" text-base md:text-lg flex gap-12 mt-2 pl-6 md:pl-0">
          <span>Kurukshetra University</span>
          <span>2021-2024</span>
        </div>
      </div>
    </section>
  );
};

export default About