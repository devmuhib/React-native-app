import React from "react";
import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }) => {
  if (focused) {
    return (
      <ImageBackground
        source={require("../../assets/images/highlight.jpg")}
        className="flex flex-row items-center justify-center w-full min-w-[112px] min-h-16 flex-1 mt-4 rounded-full overflow-hidden"
      >
        {/* <Image source={icon} className="size-5" tintColor="#151312" /> */}
        <Text className="text-white text-base font-semibold ml-2">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} className="size-5" tintColor="#a8b5db" />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/images/icon.png")}
              title={"Home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/images/icon.png")}
              title={"Search"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/images/icon.png")}
              title={"Saved"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={require("../../assets/images/icon.png")}
              title={"Profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
