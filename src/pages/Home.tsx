import { projects, socials, technologies, works } from "../assets/data";
import Article from "../components/Article";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { Link, useOutletContext } from "react-router-dom";
import articlesType from "../utils/articlesType";
function Home() {
  const articles = useOutletContext<articlesType>();
  return (
    <div>
      <Article
        title={"UI/UX designer, web developer and a lover of good music."}
        text={
          "I'm Samuel, a professional Web developer, a UI/UX designer and a music lover based in Nigeria. I have many ideas I will be implementing in the nearest future. I am open for any collaboration and readily available to help work on your website."
        }
      />
      <div className="flex gap-5 px-4 sm:px-12 my-10 lg:px-24">
        {socials
          .filter(({ name }) => name !== "Gmail")
          .map(({ url, icon }, index) => (
            <a
              href={url}
              key={index}
              className="text-zinc-500 dar:text-gray-300"
            >
              {icon}
            </a>
          ))}
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 my-24">
        <ul className="flex flex-col lg:ml-24 lg:mr-0 ">
          {articles
            .slice(0, 3)
            .map((article: articlesType[0], index: number) => (
              <li key={index}>
                <ProjectArticle {...{ ...article }} />
              </li>
            ))}
        </ul>
        <div className="mx-4 sm:mx-12 lg:mr-24 lg:ml-0 ">
          <Technologies />
          <WorkHistory />
          <NewsLetter />
        </div>
      </section>
    </div>
  );
}

function ProjectArticle({
  date,
  title,
  text,
}: {
  date: string;
  title: string;
  text: string;
}) {
  return (
    <article className="flex flex-col gap-4 px-4 py-8 hover:bg-zinc-100 cursor-pointer sm:px-12 lg:rounded-lg dark:hover:bg-zinc-800 ">
      <time className="text-zinc-600 text-sm border-l-2 border-zinc-600 px-3 dar:text-gray-200">
        {date}
      </time>
      <h3 className="text-zinc-900 text-sm font-semibold dark:text-white">
        {title}
      </h3>
      <p className="leading-5 text-zinc-600 text-sm   max-h-20 overflow-hidden text-ellipsis whitespace-normal dark:text-gray-400">
        {text.replace(/(<([^>]+)>)/gi, "")}
      </p>
      <Link
        to={`articles/${title}`}
        className="text-teal-500 text-sm font-bold dark:text-teal-500"
      >
        <span>Read article</span>
        <NavigateNextOutlinedIcon />
      </Link>
    </article>
  );
}

function NewsLetter() {
  return (
    <article className="border border-zinc-100 p-6 rounded-2xl my-6 dark:border-zinc-800">
      <div className="flex items-center gap-5">
        <span className="text-zinc-300 ">
          <EmailOutlinedIcon />
        </span>
        <h3 className="font-bold text-zinc-800 text-sm dark:text-white">
          Stay up to date
        </h3>
      </div>
      <p className="text-zinc-600 py-4 text-sm dark:text-gray-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <form className="flex pt-2 gap-4">
        <input
          type="email"
          required
          placeholder="Email address"
          className="flex-1 ring-1 ring-offset-0 ring-zinc-300 rounded-md shadow-md shadow-zinc-200 p-2 text-sm dark:shadow-none dark:bg-zinc-800 dark:ring-zinc-700 text-zinc-600 dark:text-zinc-400"
        />
        <button
          className="bg-gray-900 text-zinc-100 text-sm p-2 rounded-md font-bold dark:bg-zinc-800 dark:hover:bg-zinc-600"
          disabled
        >
          Join
        </button>
      </form>
    </article>
  );
}

function WorkHistory() {
  return (
    <article className="border border-zinc-100 p-6 rounded-2xl my-4 dark:border-zinc-800">
      <div className="flex items-center gap-5">
        <span className="text-zinc-300 ">
          <WorkOutlineOutlinedIcon />
        </span>
        <h3 className="font-bold text-zinc-800 text-sm dark:text-white">
          Work
        </h3>
      </div>
      <ul className="flex flex-col gap-5 mt-6">
        {works.map(({ date, role, name, img: { src, alt } }, index) => (
          <li key={index}>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full p-2 border boder-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full rounded-full"
                />
              </div>
              <dl className="flex flex-col flex-1 text-sm px-4">
                <dt className="font-bold text-zinc-700 dark:text-white">
                  {name}
                </dt>
                <dd className="text-zinc-600 dark:text-gray-400">{role}</dd>
              </dl>
              <time className="text-zinc-600 text-sm font-semibold dark:text-gray-400">
                {date}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full h-10 bg-zinc-100 text-zinc-900 text-sm mt-8 rounded-md font-semibold flex items-center gap-4 justify-center dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700">
        <span>Download CV</span>
        <CloudDownloadOutlinedIcon />
      </button>
    </article>
  );
}

function Technologies() {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className="border border-zinc-100 p-6 rounded-2xl my-4 dark:border-zinc-800">
      <div className="flex items-center gap-5">
        <span className="text-zinc-300 ">
          <CodeOutlinedIcon />
        </span>
        <h3 className="font-bold text-zinc-800 text-sm dark:text-white">
          Technologies
        </h3>
      </div>
      <ul className="flex flex-col gap-5 mt-6">
        {technologies
          .slice(0, showMore ? technologies.length : 4)
          .map(({ name, img: { src, alt }, stage, duration }, index) => (
            <li key={index}>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full p-2 border boder-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full rounded-full"
                  />
                </div>
                <dl className="flex flex-col flex-1 text-sm px-4">
                  <dt className="font-bold text-zinc-700 dark:text-white">
                    {name}
                  </dt>
                  <dd className="text-zinc-600 dark:text-gray-400">{stage}</dd>
                </dl>
                <time className="text-zinc-600 text-sm font-semibold dark:text-gray-400">
                  {duration}
                </time>
              </div>
            </li>
          ))}
      </ul>
      <button
        className="w-full h-10 bg-zinc-100 text-zinc-900 text-sm mt-8 rounded-md font-semibold flex items-center gap-4 justify-center dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? (
          <>
            <span>Show less</span>
            <ExpandLessOutlinedIcon />
          </>
        ) : (
          <>
            <span>Show more</span>
            <ExpandMoreOutlinedIcon />
          </>
        )}
      </button>
    </article>
  );
}

export default Home;
