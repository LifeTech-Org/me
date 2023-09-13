import { Link, useOutletContext } from "react-router-dom";
import { projects } from "../assets/data";
import Article from "../components/Article";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import articlesType from "../utils/articlesType";
function Articles() {
  const articles = useOutletContext<articlesType>();
  return (
    <>
      <Article
        title={
          "Tech-related research and write-ups on ways to make your programming life easier."
        }
        text={
          "These are mostly Tech-related write ups with easy and straight to the point explanation. It spans through solutions to different issues I encounter while developing, best practises I've disovered and useful technologies I think might be beneficial to my esteem readers. Feel free to offer suggestions about what topics you would like to see here anytime."
        }
      />
      <section>
        <ul className="flex flex-col my-24">
          {articles.map(({ title, text, date }, index: number) => (
            <li key={index}>
              <div className="flex flex-col gap-4 px-4 py-8 hover:bg-zinc-100 cursor-pointer sm:px-12 md:flex-row md:hover:bg-transparent lg:px-24 dark:hover:bg-zinc-800 dark:md:hover:bg-transparent">
                <time className="text-zinc-600 text-sm border-l-2 border-zinc-600 px-3 md:border-0 md:w-64 md:border-l md:border-zinc-100 md:py-8 dark:md:border-zinc-800 dark:text-gray-300">
                  {date}
                </time>
                <article className="flex flex-col gap-4 px-4 md:w-full md:hover:bg-zinc-100 dark:md:hover:bg-zinc-800 md:p-8 md:rounded-2xl lg:max-w-xl">
                  <h3 className="text-zinc-900 text-sm font-semibold dark:text-white">
                    {title}
                  </h3>
                  <p className="leading-5 text-zinc-600 text-sm  max-h-20 overflow-hidden text-ellipsis whitespace-normal dark:text-gray-400">
                    {text.replace(/(<([^>]+)>)/gi, "")}
                  </p>
                  <Link
                    to={title}
                    className="text-teal-400 text-sm font-semibold"
                  >
                    <span>Read article</span>
                    <NavigateNextOutlinedIcon />
                  </Link>
                </article>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Articles;
