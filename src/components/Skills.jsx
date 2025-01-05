import networking from "../assets/networking.png";
import vulnerability from "../assets/vulnerability-scanning.png";
import python from "../assets/python.png";
import linux from "../assets/linux.png";
import cybersecurity from "../assets/cybersecurity.png";
import malware from "../assets/malware.png";
import socialenginering from "../assets/social-engineering.png";
import github from "../assets/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: networking,
      title: "Networking",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: vulnerability,
      title: "Vulnerability Scanning",
      style: "shadow-red-500",
    },
    {
      id: 3,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: linux,
      title: "Linux",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      src: cybersecurity,
      title: "Cyber Security",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: malware,
      title: "Malware",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: socialenginering,
      title: "Social Engineeeing",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: github,
      title: "Git Hub",
      style: "shadow-gray-600",
    },
    
  ];
  return (
    <div
      name="Skills"
      className="w-full  pb-52  bg-gradient-to-b from-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are some skills and technologies I have worked with.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-12 sm:px-0 gap-8 w-full">
          {techs.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={
                "shadow-md duration-500 hover:scale-105 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
