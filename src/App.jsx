import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Recipe } from "./components/Recipe";
import { Title } from "./components/Title";

function App() {
  const APP_ID = "872556c5";
  const APP_KEY = "5fe65d987a72592ca2338a7dfb3bde01";

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    getReceipes();
  }, [query]);

  async function getReceipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  //updating query when click on search
  const getSearch = (e) => {
    e.preventDefault(); //prevent page refresh when pressing submit
    setQuery(search);
    setSearch("");
  };

  const buttonOver = (e) => {
    e.target.innerHTML = "Go!";
  };
  const buttonOut = (e) => {
    e.target.innerHTML = "Search";
  };

  return (
    <div className="bg-cyan-600">
      <Title />
      <div className="flex justify-center h-10">
        <form onSubmit={getSearch} className="grid grid-cols-5 w-96 m-4">
          <div className="grid col-span-4">
            <input
              className="p-2"
              type="text"
              placeholder="Enter your fav dish, I'm sure we have it!"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <div className="grid col-span-1">
            <button
              className="bg-yellow-400"
              type="submit"
              onMouseOver={buttonOver}
              onMouseOut={buttonOut}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
