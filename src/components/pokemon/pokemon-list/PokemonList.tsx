import Link from "next/link";

export default function PokemonList() {
  const id = Math.floor(Math.random() * 100);
  const itemList = [1, 50, 100];

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold text-center">PokemonList</h1>
      <p>로그인 하지 않았을 때: 로그인 버튼</p>
      <p>로그인 했을 때: 목록</p>
      <ul>
        {itemList.map((item) => (
          <li key={item}>
            <Link href={`/pokemon/${item}`}>링크 to {item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
