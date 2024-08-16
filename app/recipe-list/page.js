import RecipeList from "../../components/ui/recipe-list/index";
async function fetchRecipeFromApi() {
  try {
    const reciperesposne = await fetch("https://dummyjson.com/recipes");
    const recipe = await reciperesposne.json();
    return recipe.recipes;
  } catch (e) {
    throw new Error(e);
  }
}
export default async function recipe() {
  const recipeList = await fetchRecipeFromApi();
  return <RecipeList recipeList={recipeList} />;
}
