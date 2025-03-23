import { View, Text, TextInput } from "react-native";
import React from "react";

interface Props {
  placeholder: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
}

const SearchBar = ({
  placeholder = "Search movies, series, episodes...",
  onPress,
  value,
  onChangeText,
}: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;
