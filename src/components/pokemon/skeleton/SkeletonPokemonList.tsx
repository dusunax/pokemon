import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProps {
  children: React.ReactNode;
  gridRowLimit: number;
  totalItemCount: number;
}

const PokemonListLoader = ({
  children,
  gridRowLimit,
  totalItemCount,
}: SkeletonProps) => {
  const rowCount = Math.floor(totalItemCount / gridRowLimit);
  const itemLeft = totalItemCount % gridRowLimit;

  const singleItem = (
    <div>
      {/* 높이를 잡는 박스 */}
      <div className="w-full h-0 pb-[100%] mr-0.5 flex-shrink-0 relative shadow-sm">
        {/* 스켈레톤 UI 크기 */}
        <div className="w-full h-full absolute-center">{children}</div>

        {/* 박스 위에 원을 그리기 위해 사용하는 absolute 박스 */}
        <div className="w-full h-full pt-3 p-2 absolute-center z-10 ">
          <div className="w-full h-full rounded-full bg-light-blue opacity-60" />
        </div>
      </div>
    </div>
  );

  const singleRow = (
    <>
      {Array(gridRowLimit)
        .fill("")
        .map((e) => singleItem)}
    </>
  );

  const lastRow = (
    <>
      {Array(itemLeft)
        .fill("")
        .map((e) => singleItem)}
    </>
  );

  return (
    <div className="grid grid-cols-3 xxs:grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-2">
      {/* row 갯수만큼 출력 */}
      {Array(rowCount)
        .fill("")
        .map((e) => singleRow)}

      {/* 나머지 갯수를 출력*/}
      {itemLeft > 0 && lastRow}
    </div>
  );
};

/**
 * 포켓몬 리스트: 스켈레톤 UI |
 * totalItemCount: 화면에 나타날 아이템의 갯수 |
 * gridRowLimit: 한 줄에 들어가는 아이템의 갯수
 */
export default function SkeletonPokemonList({
  totalItemCount = 11,
  gridRowLimit = 4,
}: {
  totalItemCount: number;
  gridRowLimit: number;
}) {
  return (
    <PokemonListLoader
      gridRowLimit={gridRowLimit}
      totalItemCount={totalItemCount}
    >
      <SkeletonTheme baseColor="#e5e5e5" highlightColor="#f5f5f5">
        <Skeleton height={"100%"} borderRadius={5} />
      </SkeletonTheme>
    </PokemonListLoader>
  );
}
