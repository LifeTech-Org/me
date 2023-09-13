import { socials } from "../assets/data";
import Article from "../components/Article";
import sam from "../assets/sam.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="h-fit w-full px-4 sm:px-12 mb-8 mt-16 flex flex-col lg:pr-24 ">
        <img
          src={sam}
          alt={"samuel"}
          className="w-auto h-auto max-w-xs rotate-3 rounded-lg ml-4"
        />
        <div className="hidden lg:block">
          <Socials />
        </div>
      </div>
      <article className="w-full py-8 lg:py-16 px-4 sm:px-12 sm:max-w-lg md:max-w-3xl lg:pl-24">
        <h2 className="text-3xl sm:text-5xl font-bold text-zinc-700 max-w-3xl dark:text-white">
          I'm Samuel. I'm always on my computer connected to the whole world
          where I learn and develop the impossible.
        </h2>
        <p className="mt-6 text-zinc-500 leading-7 text-md dark:text-gray-300">
          Design in general has always been my passion. So many things about it
          just feels right by me. I so much love seeing good designs, both UI
          and UX in general. I don't know maybe it's just me, but beautiful
          design makes me happy.
        </p>
        <p className="mt-6 text-zinc-500 leading-7 text-md dark:text-gray-300">
          I think all these factored in to why I started this journey more than
          half a decade ago, a little below 7 years now, learning day and night
          regular html, css, and after a while moved to javascript. Usually, I
          guess learning is not always fun, but it was different with this as I
          was always excited to be in front of my computer for hours, starving
          and learning.
        </p>
        <p className="mt-6 text-zinc-500 leading-7 text-md dark:text-gray-300">
          I did a lot of cloning website then, and I actually thought I was good
          enough, until 3 years ago when I actually started loving to read
          official documentation of languages, frameworks and libraries, then I
          got to realise there will always be a lot to learn and so I geared up
          a lot, improved on my learning and staretd building personal projects.
        </p>
        <p className="mt-6 text-zinc-500 leading-7 text-md dark:text-gray-300">
          Over the years, I've picked up some important libraries and framework
          in which I can proudly call myself a professional in it like React JS,
          Tailwind CSS. I'm focused on building personal projects now while
          working my way up to build my clintele.
        </p>
        <p className="mt-6 text-zinc-500 leading-7 text-md dark:text-gray-300">
          I beleive I have the tenacity to start and finish any projects through
          like the personal projects I've done for myself which you can see on
          the{" "}
          <Link to="/projects" className="underline text-teal-500">
            project's page
          </Link>{" "}
          on this website. It's been amazing and I'd very much like to hear from
          you for advice, recommendations, job offers and supports of any kind.{" "}
          <br />
          Thanks for reading ME!
        </p>
      </article>
      <div className="lg:hidden">
        <Socials />
      </div>
    </div>
  );
}

function Socials() {
  return (
    <ul className="px-4 flex flex-col gap-4 mt-8 mb-16 sm:px-12 lg:px-0">
      {socials
        .filter(({ name }) => name !== "Gmail")
        .map(({ url, name, icon }, index) => {
          return (
            <li key={index}>
              <a
                href={url}
                className="flex items-center gap-5 text-zinc-600 font-semibold text-sm w-fit hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400"
              >
                <span>{icon}</span>
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      <div className="block my-4 border-t border-zinc-200 dark:border-zinc-800"></div>
      {socials
        .filter(({ name }) => name === "Gmail")
        .map(({ url, name, icon }, index) => (
          <li key={index}>
            <a
              href={url}
              className="flex items-center gap-5 text-zinc-600 font-semibold text-sm hover:text-teal-400 dark:text-gray-400 dark:hover:text-teal-400"
            >
              <span>{icon}</span>
              <span>{name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}

export default About;
