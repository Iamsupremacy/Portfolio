import EthicalHackingProjects from "../assets/portfolio/Ethical-Hacking-Projects.png";

const Projects = () => {
  const list = [
    {
      id: 1,
      src: EthicalHackingProjects,
    },
  ];
  return (
    <div
      name="Projects"
      className=" pb-52 bg-gradient-to-b from-black to-gray-800 w-full  text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">Check my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0 gap-8">
          {list.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="src"
                className="rounded-md duration-300 hover:scale-110"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 m-4 px-6 py3 duration-300 hover:scale-110">
                  <a
                    href="https://github.com/Iamsupremacy"
                    target="_blank"
                  >
                    Git Hub
                  </a>
                </button>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
