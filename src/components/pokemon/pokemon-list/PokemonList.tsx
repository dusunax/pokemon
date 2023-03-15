import React, { useEffect, useState } from "react";
import Link from "next/link";

import Pokemon from "../pokemon/Pokemon";

import { UsePoketmonQuery } from "../hooks/usePokemonQuery";
import { setPaginationFromUserRef } from "@/api/pokemonAPI";
import SkeletonPokemonList from "../skeleton/SkeletonPokemonList";

function PokemonList({ pokemonQuery }: { pokemonQuery: UsePoketmonQuery }) {
  const { pokemonList, setPage, page, limit, isLoading, isFetched } =
    pokemonQuery;
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
    <div className="h-full px-8 pb-3 box-border flex flex-col justify-between">
      {isLoading ? (
        <SkeletonPokemonList gridRowLimit={limit} totalItemCount={18} />
      ) : (
        <ul className="grid grid-cols-3 xxs:grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-2">
          {pokemonList.map((item, idx) => (
            <li
              key={"" + item.no + idx}
              className="px-2 text-xxs bg-[#cae8f4] rounded-md"
            >
              {item.no <= 151 ? (
                <Link href={`/pokemon/${item.no}`}>
                  <Pokemon pokemon={item} />
                </Link>
              ) : (
                <Pokemon pokemon={item} />
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="pagination-to-side py-4">
        <button
          className={"text-red mx-1" + (page === 0 ? " opacity-40" : "")}
          onClick={() => {
            page > 0 && setPage(page - 1);
          }}
        >
          ●
        </button>
        {totalPages > 0 && (
          <button
            className={
              "text-red mx-1" + (page === totalPages - 1 ? " opacity-40" : "")
            }
            onClick={() => {
              page < totalPages - 1 && setPage(page + 1);
            }}
          >
            ●
          </button>
        )}
      </div>
    </div>
  );
}

export default React.memo(PokemonList);
