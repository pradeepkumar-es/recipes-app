import RecipeItem from "../../../components/ui/recipeItem/index";
async function fetchCurentRecipeDetails(recipeItemId) {
  const apiResponse = await fetch(
    `https://dummyjson.com/recipes/${recipeItemId}`
  );
  const data = apiResponse.json();
  return data;
}
export default async function RecipeDetails({ params }) {
  const recipeDetailsItem = await fetchCurentRecipeDetails(params?.details);
  return <RecipeItem recipeDetailsItem={recipeDetailsItem} />;
}
