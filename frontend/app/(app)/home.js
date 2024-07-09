import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import AdverticementCard from "../../components/adverticementCard";
import Carousel from "../../components/carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TabScreen from "../../components/tabScreen";
import ImageGrid from "../../components/imageGrid";

export default function Home() {
  const [tab, setTab] = useState(undefined);

  const updatedTab = (tab) => {
    setTab(tab);
  };
  console.log(tab);
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {/* <View className="flex-1"> */}
      <Carousel />
      <View className="flex-1 px-5 py-10">
        <View style={styles.container} className="bg-indigo-300 px-4 py-4">
          <Text className="text-3xl font-bold">My Details</Text>
        </View>
      </View>

      <TabScreen updatedTab={updatedTab} />

      <ImageGrid currentTab={tab} />
      {/* <Carousel />
        <View className="flex-1 px-5 py-10">
          <View style={styles.container} className="bg-indigo-200 px-4 py-4">
            <Text className="text-3xl font-bold">My Details</Text>
          </View>
        </View> */}
      {/* </View> */}
    </ScrollView>
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
  },
  text: {
    fontSize: hp(2.5),
    fontWeight: "bold",
  },
});
