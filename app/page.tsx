import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>recipes app</div>
      <Link href={"/recipe-list"}>Go to recipe list</Link>
    </>
  );
}
