import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div>
      <h1>Recipes</h1>
      <Link href={`/`}>
        <button>Go Back to Home</button>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {recipeList.map((recipe) => (
          <Link href={`/recipe-list/${recipe.id}`}>
            <Card style={{ display: "flex", justifyContent: "center" }}>
              <CardContent>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img style={{ width: "100px" }} src={recipe.image} />
                </div>
                <h2
                  style={{
                    fontWeight: "bold",
                    alignContent: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {recipe.name}
                </h2>
                <span>Rating:{recipe.rating}</span>
                <span style={{ paddingLeft: "10px" }}>
                  Dish Type: {recipe.cuisine}
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
