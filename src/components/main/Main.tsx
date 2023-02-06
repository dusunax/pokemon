import Link from "next/link";

export default function Main() {
  return (
    <div className="text-center">
      <h1 className="m-common mb-4 text-4xl font-bold">Main</h1>
      <Link href="/pokemon">나 링크</Link>
    </div>
  );
}
