"use client";
import CategorySelector from "@/components/categorySelector/categorySelector";
import Latest from "@/components/latest/latest";
import Loader from "@/components/loader";
import Popular from "@/components/popular/popular";
import TopCards from "@/components/topCards/topCards";
import { fetchPosts } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainPage() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedCategoryID, setSelectedCategoryID] = useState("");

	const [loading, setLoading] = useState(true)
	
	  const [articles, setArticles] = useState([]);
	  const [filteredArticles, setFilteredArticles] = useState([]);

	useEffect(() => {
		const savedCategory = localStorage.getItem("category");
		if (savedCategory) {
			setSelectedCategory(savedCategory);
		}
	}, []);

	  useEffect(() => {
		setLoading(true)
		const loadArticles = async () => {
		  const data = await fetchPosts();
		  setArticles(data);
		  setFilteredArticles(data);


		  setLoading(false)
		};
		loadArticles();
	  }, []);

	const handleCategoryChange = (category, id) => {
		setSelectedCategory(category);
		setSelectedCategoryID(id);
		localStorage.setItem("category", category);
		localStorage.setItem("categoryId", id);

		// window.location.reload();
	};





	return (
		<div>

			{
				loading
				&&
				<Loader/>
			}

			<CategorySelector
				onSelect={handleCategoryChange}
				selectedCategory={selectedCategory}
			/>
		 <TopCards />

			<div className="flex flex-col md:flex-row gap-6">
				<div className="latest w-full">
					<Latest ctg={selectedCategory} ctgID={selectedCategoryID} articles={articles} filteredArticles={filteredArticles} setFilteredArticles={setFilteredArticles}  />
				</div>
				<div className="popular md:max-w-[410px] w-full">
					<Popular />
				</div>
			</div>
		</div>
	);
}
