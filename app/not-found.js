import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Sorry! this page does not exist</h1>
      <Link href={"/"}>go back to home page</Link>
    </div>
  );
}
