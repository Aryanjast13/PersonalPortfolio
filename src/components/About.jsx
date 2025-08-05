
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
  return (
    <section
      ref={scrollRef}
      className="about w-full pb-40  px-12"
    >
      <h2 className="text-7xl py-6">About Me</h2>
      <div className="flex mt-16 ">
        <div className="w-1/2   p-4">
          <p className="text-xl mb-2">
            <span className="text-2xl italic"> Hey there! </span> I'm Aryan, a
            full-stack web developer who loves building functional,
            problem-solving apps that do more than just look good — they work
            seamlessly.
          </p>
          <p className="text-xl mb-2">
            From turning an idea into a working product to debugging weird edge
            cases at 2AM, I enjoy every part of the process. I work mostly with
            the MERN stack, but I’m always exploring new tools and learning how
            things work under the hood — whether it's authentication flows,
            real-time sockets, or performance tweaks.
          </p>
          <p className="text-xl mb-2">
            I believe in "learning in public", sharing progress, and building
            cool things — not just perfect ones. If you like shipping fast,
            learning faster, and making ideas real — we'll get along great.
          </p>
        </div>
        <div className="w-1/2 pl-20 pt-5 ">
          <h3 className="text-3xl ml-10 italic font-medium ">Skills</h3>

          <div className="overflow-x-auto pl-10 mt-6">
            <table className="table-auto w-full">
              <tbody>
                {skillData.map((data, index) => (
                  <tr key={index}>
                    <th  className="text-left text-lg  px-4 py-2 align-top w-1/4 font-semibold text-gray-800">
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
      <div className="w-full ">
        <h3 className="text-4xl italic font-medium">Education</h3>
        <p className="text-2xl mt-6">Bacherlors of Computer Applications</p>
        <div className="text-lg flex gap-12 mt-2">
          <span>Kurukshetra University</span>
          <span>2021-2024</span>
        </div>
      </div>
    </section>
  );
};

export default About