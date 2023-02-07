import usePoketmonQuery from "../hooks/usePoketmonQuery";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonNew() {
  const { newPokemon, getPokemonQuery, updateIdNo } = usePoketmonQuery();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">PokemonNew</h1>
      <Pokemon pokemon={newPokemon} />

      <section className="random-pokemon">
        <button onClick={updateIdNo}>뽑기</button>
      </section>
    </div>
  );
}
