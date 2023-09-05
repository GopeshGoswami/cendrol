import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Cards from "../components/Cards";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [joke, setJoke] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [jokeLoading, setJokeLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((response) => {
        console.log("Error fetching Cards", response);
        setIsLoading(false);
      });
  }, []);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    fetchJokeForCategory(category);
    setIsModalOpen(true);
    setSelectedCard(category);
  };

  const fetchJokeForCategory = (category) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        setJoke(response.data.value);
        setJokeLoading(false);
        console.log(joke);
      })
      .catch((error) => console.error("Error fetching joke:", error));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setSelectedCard(null);
  };

  return (
    <>
      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin text-white text-9xl" />
      ) : (
        ""
      )}

      <div className="grid  grid-cols-4 md:grid-cols-2 lg:grid-cols-4 text-white text-lg md:gap-y-3  md:w-fit  bg-transparent">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleCardClick(category);
                setJokeLoading(true);
              }}
            >
              <Cards
                category={category}
                isOpen={isModalOpen}
                isSelected={selectedCard === category} // Pass isSelected prop
              />
            </div>
          );
        })}
      </div>
      <Card
        isOpen={isModalOpen}
        category={selectedCategory}
        onClose={closeModal}
        joke={joke}
        fetchJokeForCategory={fetchJokeForCategory}
        jokeLoading={jokeLoading}
        setJokeLoading={setJokeLoading}
      />
    </>
  );
};

export default Home;
