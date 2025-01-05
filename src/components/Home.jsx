import { Link } from "react-scroll";
import Profile from "../assets/profile.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTypewriter } from "react-simple-typewriter";
import "../App.css";
const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Jimit Shah", "Ethical Hacker"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div
      name="home"
      className="pt-40 pb-52 w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg flex flex-col pt-10 px-4 md:flex-row justify-center items-center mx-auto h-full">
        <div className=" flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-6xl text-white font-bold">
            Hi I am <span className="text-sky-200">{typeEffect}</span>
          </h2>
          <p className="text-gray-500 py-4  max-w-md">
            Hey! I’m Jimit, an Ethical hacker, passionate and results-driven ethical hacker with a strong 
            foundation in cybersecurity and a commitment to safeguarding systems and data from malicious threats. 
            Let’s create something awesome
            together!
          </p>

          <div>
            <Link
              to="Projects"
              smooth
              duration={400}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 ">
                <FaArrowRightLong size={15} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="pt-12 md:pt-0 rounded-full">
          <img
            src={Profile}
            alt="my profile"
            className="profile rounded-full  border-gray-100 border-l-8 border-b-8  mx-auto w-80 md:full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
