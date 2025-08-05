const ProjectCard = ({project}) => {
  return (
    <div className="flex  justify-between mb-16 bg-[#eee8d9] rounded-lg">
      <div className="w-[50%] flex flex-col justify-between pl-4 ">
        <h4 className="text-3xl mt-4">{project.title}</h4>
        <div className=" mb-10">
          <p className="text-xl">{project.description}</p>
          <ul className="mt-4 flex gap-2">
            {project.tools.map((tool) => (
              <li
                key={tool.id}
                className="text-xs inline-block py-2 px-3 rounded bg-black/80 text-white tracking-wider font-normal"
              >
                {tool.text}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            <a href={project.github_link} target="_blank">
              <button className="text-sm border px-4 rounded-md py-1">
                github
              </button>
            </a>
            <a href={project.live_link} target="_blank">
              <button className="text-sm border px-4  text-black rounded-md py-1">
                Link
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[45%] bg-blue-500 h-[25rem] rounded overflow-hidden ">
        <img
          src={project.image.url}
          alt={project.image.altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
