import { UsePoketmonQuery } from "../hooks/usePokemonQuery";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonList({
  pokemonQuery,
}: {
  pokemonQuery: UsePoketmonQuery;
}) {
  const { pokemonList, idNo, updateIdNo } = pokemonQuery;

  if (pokemonList.length === 0) return <></>;

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold text-center">PokemonList</h1>
      <ul className="grid grid-cols-3">
        {pokemonList.map((item) => (
          <li key={item.id} className="text-xxs">
            <Pokemon pokemon={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
