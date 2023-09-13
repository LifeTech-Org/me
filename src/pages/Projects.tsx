import { projects } from "../assets/data";
import Article from "../components/Article";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
function Projects() {
  return (
    <>
      <Article
        title={
          "Things I’ve made trying to make the world a better and happy place."
        }
        text={
          "These are mostly personal projects I've worked on myself alone. You will love the idea behind each project and very well love the design too. You are very welcome to offer any suggestions on improvement or permanent changes you think I should make here. You can easily email me through the mail on this website."
        }
      />
      <section>
        <ul className="grid grid-cols-1 pb-8 sm:grid-cols-2 lg:grid-cols-3 sm:px-12 sm:gap-4 lg:px-24 mt-24">
          {projects.map(({ title, text, url, img: { src, alt } }, index) => (
            <li key={index}>
              <article className="flex flex-col gap-4 px-4 py-8 hover:bg-zinc-100 cursor-pointer group sm:rounded-xl dark:hover:bg-zinc-800">
                <div className="h-12 w-12 rounded-full p-1 ring-1 ring-zinc-300 dark:ring-zinc-800 dark:bg-zinc-900">
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-zinc-900 text-sm font-semibold dark:text-white">
                  {title}
                </h3>
                <p className="leading-5 text-zinc-600 text-sm dark:text-gray-400">
                  {text}
                </p>
                <a
                  href={url}
                  target="_blank"
                  className="text-gray-600 text-xs  font-semibold flex gap-3 items-center group-hover:text-teal-400 text-ellipsis overflow-hidden dark:text-white"
                >
                  <LinkOutlinedIcon />
                  <span>{url}</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Projects;
