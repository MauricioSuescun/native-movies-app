import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFecth";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );
  return (
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            className="w-full h-[550px]"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
          />
        </View>
        <View className="flex-col items-start justify-center px-5 mt-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
