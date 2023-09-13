import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import articlesType from "./utils/articlesType";

function App() {
  const [articles, setArticles] = useState<articlesType>([]);
  useEffect(() => {
    // Fetch articles
    getDocs(
      query(collection(db, "articles"), orderBy("timestamp", "desc"))
    ).then((snapshot) => {
      const tmp: articlesType = [];
      snapshot.forEach((doc) => tmp.push(doc.data() as articlesType[0]));
      setArticles(tmp);
    });

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className="w-full relative bg-zinc-100 dark:bg-black sm:px-8 md:px-16">
      <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
        <Header />
        <main>
          <Outlet context={articles} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
