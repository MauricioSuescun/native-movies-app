import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) => {
  return (
    // @ts-ignore
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-md font-bold">{title}</Text>
        <View className="flex-row items-center mt-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-sm ml-1 text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-light-300 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
