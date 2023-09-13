import { softwares } from "../assets/data";
import Article from "../components/Article";
import React from "react";
function Uses() {
  return (
    <>
      <Article
        title={"Software I use, gadgets I love, and other things I recommend."}
        text={
          "Of course I use more than what is here, to keep things short, that is why I have highlighted some important softwares. If there is any on your mind that isn't here, please do recommend in my mail."
        }
      />
      <ul className="flex flex-col my-24">
        {softwares.map(({ type, contents }, index) => (
          <li key={index}>
            <div className="flex flex-col gap-5 px-4 py-8 sm:px-12 md:flex-row lg:px-24">
              <h3 className="text-zinc-700 text-sm font-semibold  md:w-44 md:pl-4  md:border-l md:border-zinc-100 dark:border-zinc-800 dark:text-gray-300">
                {type}
              </h3>
              <ul className="flex flex-col gap-12">
                {contents.map(({ title, text }, index) => (
                  <li key={index}>
                    <article className="flex flex-col gap-3 lg:max-w-xl">
                      <h3 className="text-zinc-700 text-md font-semibold dark:text-white">
                        {title}
                      </h3>
                      <p className="leading-5 text-zinc-600 text-sm dark:text-gray-400">
                        {text}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Uses;
