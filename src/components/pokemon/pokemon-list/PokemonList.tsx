import { setPaginationFromUserRef } from "@/api/pokemonAPI";
import { useEffect, useState } from "react";
import { UsePoketmonQuery } from "../hooks/usePokemonQuery";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonList({
  pokemonQuery,
}: {
  pokemonQuery: UsePoketmonQuery;
}) {
  const { pokemonList, setPage, page, limit, setLimit } = pokemonQuery;
  const [totalPages, setTotalPages] = useState<null | number>();

  useEffect(() => {
    const setTotalPage = async () => {
      const { totalPages } = await setPaginationFromUserRef(limit);
      setTotalPages(totalPages);
    };
    setTotalPage();
  }, [limit]);

  if (pokemonList.length === 0) return <></>;
  if (!totalPages) return <></>;

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold text-center">PokemonList</h1>
      <ul className="grid grid-cols-2 xxs:grid-cols-3 xs:grid-cols-5 md:grid-cols-3">
        {pokemonList.map((item) => (
          <li key={item.no} className="text-xxs">
            <Pokemon pokemon={item} />
          </li>
        ))}
      </ul>
      <div>
        <button
          className={page === 0 ? "text-gray-300" : ""}
          onClick={() => page > 0 && setPage(page - 1)}
        >
          ◀
        </button>
        <button
          className={page === totalPages - 1 ? "text-gray-300" : ""}
          onClick={() => page < totalPages - 1 && setPage(page + 1)}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
