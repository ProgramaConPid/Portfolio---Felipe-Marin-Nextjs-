import Link from "next/link";

export default function Home() {
  return (
    <div className="container__link h-screen flex justify-center items-center">
      <Link
        className="text-white p-3 rounded-[.4rem] inline-block bg-emerald-600 cursor-pointer"
        href={"/products"}
      >
        Ir a Productos
      </Link>
    </div>
  );
}
