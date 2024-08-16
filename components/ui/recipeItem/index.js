export default function RecipeItem({ recipeDetailsItem }) {
  //destructuring the props
  console.log(recipeDetailsItem.image);
  return (
    <>
      <div>
        <div>
          <img src={recipeDetailsItem.image} />
        </div>
        <div>
          <h1>{recipeDetailsItem.name}</h1>
        </div>
        <div>
          <p>{recipeDetailsItem.cuisine}</p>
        </div>
        <div>
          <p>{recipeDetailsItem.rating}</p>
        </div>
        <div>
          <p>{recipeDetailsItem.ingredients}</p>
        </div>
        <div>
          <p>{recipeDetailsItem.instructions}</p>
        </div>
      </div>
    </>
  );
}
