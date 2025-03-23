import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface MovieCardProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: MovieCardProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placeholder.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg "
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold" numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
