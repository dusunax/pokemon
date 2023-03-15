import { useState } from "react";

import { FBPokemonDTO, PokemonDTO } from "@/models/pokemon";
import Image from "next/image";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface Pokemon {
  pokemon: PokemonDTO | FBPokemonDTO;
  background?: string;
  hideText?: boolean;
  textSize?: string;
}

export default function Pokemon({
  pokemon,
  background = "base",
  hideText = true,
  textSize = "text-xxs",
}: Pokemon) {
  const { names, imgUrl, no } = pokemon;
  const isCachedRange = no > 0 && no <= 151;

  // 스타일 props 적용
  const backgroundColor = background === "white" ? "bg-white" : `bg-slate-200`;
  const textOpacity = hideText ? "opacity-0" : "";
  const textColor = isCachedRange ? "text-green-300" : "text-zinc-50";
  const border = isCachedRange ? "border-2 border-red" : "";

  const [imageLoaded, setImageLoaded] = useState(false);
  const imageLoadHandler = () => {
    setImageLoaded(true);
  };

  return (
    <div
      className={`new-pokemon px-2 pt-4 my-2 rounded-full mx-auto ${backgroundColor} grad shadow-inner-custom relative ${border}`}
    >
      {/* 포켓몬 이미지 */}
      {/* <Image
        loader={() => imgUrl}
        src={imgUrl}
        alt={names.ko}
        width={40}
        height={40}
        className={`img w-full object-contain transition-opacity ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        unoptimized={true}
        onLoadingComplete={imageLoadHandler}
      /> */}
      <div className="w-full pb-[100%] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgUrl}
          alt={names.ko}
          loading="lazy"
          onLoad={imageLoadHandler}
          className={`img absolute top-0 left-0 w-full h-full object-contain transition-opacity ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {!imageLoaded && (
        <div className="w-full h-0 pb-[100%] absolute-center ">
          {/* 스켈레톤 UI 크기 */}
          <div
            className={`w-full h-full rounded-full absolute -top-1 left-0 shadow-lg`}
          >
            <SkeletonTheme baseColor="#daeaf0" highlightColor="#f3f8fd">
              <Skeleton height={"100%"} circle={true} duration={0.9} />
            </SkeletonTheme>
          </div>
        </div>
      )}

      {/* 포켓몬 넘버, 포켓몬 이름 */}
      <div
        className={`name px-2 rounded-lg absolute -top-2 left-1/2 -translate-x-1/2 bg-zinc-600 whitespace-nowrap break-keep ${textOpacity} ${textSize} ${textColor}`}
      >
        {(no > 0 ? no : "") + " " + names["ko"]}
      </div>
    </div>
  );
}
