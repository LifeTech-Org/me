function Article({ title, text }: { title: String; text: String }) {
  return (
    <article className="w-full pt-16 pb-0 px-4 sm:px-12 sm:max-w-lg md:max-w-4xl lg:px-24">
      <h2 className="text-3xl sm:text-5xl font-bold text-zinc-700 max-w-4xl dark:text-white">
        {title}
      </h2>
      <p className="mt-6 text-zinc-500 leading-7 text-md dark:text-gray-300">
        {text}
      </p>
    </article>
  );
}

export default Article;
