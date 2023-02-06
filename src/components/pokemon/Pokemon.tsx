import { useEffect } from "react";
import usePoketmonQuery from "./hooks/usePoketmon";

export default function Pokemon() {
  const { getPokemonQuery } = usePoketmonQuery();

  useEffect(() => {
    getPokemonQuery(1);
    console.log(getPokemonQuery(1));
  }, [getPokemonQuery]);

  return (
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">Pokemon</h1>
    </div>
  );
}
