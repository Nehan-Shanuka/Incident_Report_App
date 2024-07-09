import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useAuth } from "../../context/authContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Profile() {
  const { user } = useAuth();
  console.log('user: ', user);
  return (
    <View className="flex-1 items-center pt-16">
      <Image
        style={{ height: hp(15), aspectRatio: 1, borderRadius: 100 }}
        source={user?.profileUrl}
        className=""
      />
      <View className="flex-1 px-5 py-10">
        <View style={styles.container} className="bg-indigo-300 px-4 py-4">
          <Text className="text-3xl font-bold text-center">{user?.username}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    // height: hp(100)
    paddingBottom: hp(13),
  },
  container: {
    height: hp(20),
    width: wp(90),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
  },
  text: {
    fontSize: hp(2.5),
    fontWeight: "bold",
  },
});
