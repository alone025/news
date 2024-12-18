import React, { useEffect, useState } from "react";
import CardWImg from "../cardWImg/cardWImg";
import { useRouter } from "next/navigation";
import { fetchPosts } from "@/utils/api";

const Latest = ({ ctg, ctgID, articles,  filteredArticles, setFilteredArticles}) => {
  const [category, setCategory] = useState("");
//   const [articles, setArticles] = useState([]);
//   const [filteredArticles, setFilteredArticles] = useState([]);
  


  useEffect(() => {
    const updateFilteredArticles = () => {
      const currentCategory = ctg || localStorage.getItem("category") || "";
      const currentCategoryID =
        ctgID || localStorage.getItem("categoryId") || "";

      if (!currentCategory || !currentCategoryID) {
        setFilteredArticles([]);
        return;
      }

      setCategory(currentCategory);

      if (currentCategory === "Главная") {
        setFilteredArticles(articles);
      } else if (currentCategoryID !== "glavniy") {
        const filtered = articles.filter(
          (article) => article.category._id === currentCategoryID
        );
        setFilteredArticles(filtered);
      } else {
        setFilteredArticles(articles);
      }
    };

    updateFilteredArticles();
  }, [ctg, ctgID, articles]);

  return (
    <div className="mt-[30px]">
      <div className="lg sm:px-6 flex flex-row gap-4 items-center">
        <h2 className="georama text-[26px] md:text-[32px] font-semibold text-[#1A1A1A]">
          {category === "Главная" ? "Последние" : category || "Последние"}
        </h2>

        <div className="line h-[2px] bg-[#1A1A1A] w-full"></div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-[30px]">
        {Array.isArray(filteredArticles) && filteredArticles?.length > 0 ? (
          filteredArticles?.map((article, index) => (
            <div key={index}>
              <CardWImg imgN={article.image} data={article} key={index} />
            </div>
          ))
        ) : (
          <h3 className="georama text-xl text-center">...</h3>
        )}
      </div>
    </div>
  );
};

export default Latest;
