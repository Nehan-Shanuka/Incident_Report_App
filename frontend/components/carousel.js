import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import Animated, { FadeInRight } from "react-native-reanimated";

const data = [
  "https://t4.ftcdn.net/jpg/06/80/35/81/360_F_680358140_OWBF6ezZOzgJ8dLhc998DSmqXHd08ej9.jpg",
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS950fJAPIoaCLL0LxjONBPVmdKI9Cf0xY26SuhWHNwJ6BYE_gNJEwKrDX03yOZT5U2We4&usqp=CAU",
];

export default function Carousel() {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        horizontal
        contentContainerStyle={styles.flatlistContainer}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => <CategoryItem index={index} />}
      />
    </View>
  );
}

const CategoryItem = ({ index }) => {
  return (
      <Animated.View entering={FadeInRight.delay(index * 200).duration(1000).springify().damping(14)}>
    <Image source={{ uri: data[index] }} style={styles.category} />
      </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: wp(4),
    gap: 30,
    paddingTop: 30,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: wp(80),
    height: hp(20),
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: "bold",
  },
});
