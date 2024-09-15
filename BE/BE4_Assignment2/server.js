const express = require("express");
const { connectDB } = require("./config/db.connect");
const { Recipe } = require("./models/recipe.model");

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("recipe API , Server is running");
});

//  Create an API with route "/recipes" to create a new recipe in the recipes database.

async function createRecipe(recipe) {
  try {
    const newRecipe = new Recipe(recipe);
    const savedRecipe = newRecipe.save();
    return savedRecipe;
  } catch (error) {
    throw error;
  }
}

app.post("/recipes", async (req, res) => {
  try {
    const recipe = await createRecipe(req.body);

    res
      .status(200)
      .json({ message: "new recipe created successfully", newRecipe: recipe });
  } catch (error) {
    console.error("Error get while create new recipe", error);
    res.status(500).json({ error: "failed to create new recipe" });
  }
});

// Create an API to get all the recipes in the database as a response.

async function getAllRecipes() {
  try {
    const recipes = await Recipe.find({});
    return recipes;
  } catch (error) {
    throw error;
  }
}

app.get("/recipes", async (req, res) => {
  try {
    const recipes = await getAllRecipes();

    if (recipes.length !== 0) {
      res.status(200).json({
        message: "get all the recipes",
        allRecipes: recipes,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    console.error("Error get all recipes", error);
    res.status(500).json({ error: "failed to get recipe" });
  }
});

//  Create an API to get a recipe's details by its title

async function getRecipeByTitle(recipeTitle) {
  try {
    const recipes = await Recipe.find({ title: recipeTitle });
    return recipes;
  } catch (error) {
    throw error;
  }
}

app.get("/recipes/recipeTitle/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const recipes = await getRecipeByTitle(title);

    if (recipes.length !== 0) {
      res.status(200).json({
        message: "Recipe found by its' title",
        recipes: recipes,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    console.error("Error get all recipes by Its title", error);
    res.status(500).json({ error: "failed to get recipe" });
  }
});

//  Create an API to get details of all the recipes by an author

async function getRecipeByAuthor(author) {
  try {
    const recipes = await Recipe.find({ author: author });
    return recipes;
  } catch (error) {
    throw error;
  }
}

app.get("/recipes/author/:authorName", async (req, res) => {
  const { authorName } = req.params;

  try {
    const recipes = await getRecipeByAuthor(authorName);

    if (recipes.length !== 0) {
      res.status(200).json({
        message: "get recipes by author successfully",
        recipes: recipes,
      });
    }
  } catch (error) {}
});

// Create an API to get all the recipes that are of "Easy" difficulty level.

async function getRecipeByLevel(level) {
  try {
    const recipe = await Recipe.find({ difficulty: level });
    return recipe;
  } catch (error) {
    throw error;
  }
}

app.get("/recipes/difficulty/:level", async (req, res) => {
  const { level } = req.params;
  console.log(level);
  try {
    const recipes = await getRecipeByLevel(level);

    if (recipes.length !== 0) {
      res.status(200).json({
        message: "recipe get diffculty level successfully",
        recipes: recipes,
      });
    } else {
      res.status(404).json({
        error: "Recipe not found",
      });
    }
  } catch (error) {
    console.error("error get while finding recipe by diffculty", error);
    res.status(500).json({ error: "failed to get recipe" });
  }
});

//  Create an API to update a recipe's difficulty level with the help of its id.

async function updateRecipeById(recipeId, dataToUpdate) {
  try {
    const recipe = await Recipe.findByIdAndUpdate(recipeId, dataToUpdate, {
      new: true,
    });
    return recipe;
  } catch (error) {
    throw error;
  }
}

app.post("/recipes/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  const udpatedData = req.body;
  try {
    const recipe = await updateRecipeById(recipeId, udpatedData);

    if (recipe) {
      res.status(200).json({
        message: "recipe by Id update successfully",
        updatedRecipe: recipe,
      });
    } else {
      res.status(404).json({
        error: "Recipe not found",
      });
    }
  } catch (error) {
    console.error("error while update recipe by its id", error);
    res.status(500).json({ error: "failed to update recipe" });
  }
});

// Create an API to update a recipe's prep time and cook time with the help of its title.

async function updateRecipeByTitle(recipeTitle, dataToUpdate) {
  try {
    const recipe = await Recipe.findOneAndUpdate(
      { title: recipeTitle },
      dataToUpdate,
      { new: true }
    );
    return recipe;
  } catch (error) {
    throw error;
  }
}

app.post("/recipes/recipeTitle/:recipeTitle", async (req, res) => {
  const { recipeTitle } = req.params;
  const udpatedData = req.body;
  try {
    const recipe = await updateRecipeByTitle(recipeTitle, udpatedData);

    if (recipe) {
      res.status(200).json({
        message: "recipe updated successfully by title",
        recipe: recipe,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    console.error("error to failed to update recipe", error);
    res.status(500).json({ error: "failed to update recipe" });
  }
});

// Create an API to delete a recipe with the help of a recipe id

async function deleteRecipeById(recipeId) {
  try {
    const recipe = await Recipe.findByIdAndDelete(recipeId);
    return recipe;
  } catch (error) {
    throw error;
  }
}

app.delete("/recipes/:recipeId", async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await deleteRecipeById(recipeId);

    if (recipe) {
      res.status(200).json({
        message: "recipe deleted successfully",
        deleted: recipe,
      });
    } else {
      res.status(404).json({
        error: "Recipe not Found",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "failed to delete the recipe" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
