import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { socials } from "../assets/data";
import ShareIcon from "@mui/icons-material/Share";
import articlesType from "../utils/articlesType";
function Article() {
  const [article, setArticle] = useState<articlesType[0] | null>(null);
  const title = useLocation().pathname.split("/")[2];
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getDoc(doc(db, "articles", title))
      .then((snapshot) => {
        setArticle(snapshot.data() as articlesType[0]);
      })
      .finally(() => {
        setIsLoading(false);
      });
    if (article) {
      document.title = article!.title;
    }
  }, [article]);
  return isLoading ? (
    <div
      className="w-full flex items-center justify-center"
      style={{ height: "calc(100vh - 245px)" }}
    >
      <CircularProgress />
    </div>
  ) : article ? (
    <article className="flex flex-col py-12 px-4 md:px-12 lg:px-24 relative">
      <time className="text-zinc-600 text-sm border-l-2 border-zinc-600 px-3 dark:text-gray-300">
        {article.date}
      </time>
      <h2 className="text-3xl sm:text-5xl font-bold text-zinc-700 max-w-4xl dark:text-white py-8">
        {article.title}
      </h2>
      <div
        className="h-5/6 text-zinc-600 dark:text-zinc-400 article break-word text-sm"
        dangerouslySetInnerHTML={{ __html: article?.text }}
      ></div>
      <div className="my-2 flex justify-end">
        <button
          className="ring-1 ring-sky-700 bg-sky-600 text-xs rounded-full px-3 py-2 text-white w-fit hover:bg-sky-600/70"
          onClick={() =>
            navigator.share({
              title: article.title,
              url: `https://devjhayz.netlify.app/articles/${title}`,
            })
          }
        >
          <ShareIcon />
          <span className="ml-1.5">Share article</span>
        </button>
      </div>
      <div className="py-4 text-sm text-zinc-600 dark:text-zinc-400 underline mt-8">
        Do you have any question or issues you'd like to discuss futher, you can
        reach me through the following channels.
      </div>

      <div className="flex gap-5 ">
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
    </article>
  ) : (
    <div
      className="w-full flex items-center justify-center"
      style={{ height: "calc(100vh - 245px)" }}
    >
      <article className="flex items-center flex-col gap-8 max-w-sm">
        <img src="https://img.icons8.com/color/48/null/broken-link.png" />
        <p className="text-center text-zinc-600 text-xs px-4 md:px-12 dark:text-zinc-400 ">
          You are trying to reach a broken link. Normally this shouldn't happen
          unless you intentionally made it that way. Try going back to the
          homepage to start afresh.
        </p>
      </article>
    </div>
  );
}

export default Article;
