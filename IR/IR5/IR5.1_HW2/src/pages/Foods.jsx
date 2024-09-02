/* eslint-disable react-refresh/only-export-components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export const foodItemsData = [
  { id: 1, name: "Apple", calories: 52, category: "Fruit" },
  { id: 2, name: "Banana", calories: 89, category: "Fruit" },
  { id: 3, name: "Chicken Breast", calories: 165, category: "Protein" },
  { id: 4, name: "Salad", calories: 100, category: "Vegetable" },
  { id: 5, name: "Yogurt", calories: 120, category: "Dairy" },
];

const Foods = () => {
  const [selectedCategories, setSelectedCategories] = useState(["all"]);

  const handleCheckbox = (event) => {
    const { value } = event.target;
    if (value === "all") {
      setSelectedCategories(["all"]);
    } else {
      const newCategories = selectedCategories.includes(value)
        ? selectedCategories.filter((category) => category !== value)
        : [...selectedCategories , value];

      if (newCategories.length === 0) {
        setSelectedCategories(["all"]);
      } else {
        setSelectedCategories(
          newCategories.filter((category) => category !== "all")
        );
      }
    }
  };

  const categoryOptions = ["Fruit", "Protein", "Vegetable", "Dairy"];

  const filterFoodItems = selectedCategories.includes("all")
    ? foodItemsData
    : foodItemsData.filter((foodItem) =>
        selectedCategories.includes(foodItem.category)
      );

  console.log(selectedCategories);

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List of foods Items</h1>

        <div className="form-group my-3">
          <label htmlFor="category" className="form-check-label mx-3">
            Category
          </label>

          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="category"
              id="all"
              value="all"
              onChange={handleCheckbox}
              checked={selectedCategories.includes("all")}
            />
            <label htmlFor="all" className="form-check-label">
              All
            </label>
          </div>

          {categoryOptions.map((category, index) => (
            <div key={index} className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                name={category}
                id={`${category}-${index}`}
                value={category}
                onChange={handleCheckbox}
                checked={selectedCategories.includes(category)}
              />
              <label
                htmlFor={`${category}-${index}`}
                className="form-check-label"
              >
                {category}
              </label>
            </div>
          ))}
        </div>

        <ul className="list-group">
          {filterFoodItems.map((food) => (
            <li key={food.id} className="list-group-item">
              <h4>{food.name}</h4>
              <p>Calories: {food.calories}</p>
              <p>Category: {food.category}</p>
              <Link className="btn btn-primary" to={`/foods/${food.id}`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Foods;
