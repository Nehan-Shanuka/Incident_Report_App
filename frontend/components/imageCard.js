import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// const data = [
//   "../assets/images/save-money.png",
//   "../assets/images/home-insurance.png",
//   "../assets/images/car-insurance.png",
//   "../assets/images/care.png",
//   "../assets/images/healthcare.png",
//   "../assets/images/mortgage.png",
// ]

const ImageCard = ({ item, columns, index, imagePath }) => {
  const isLastInRow = () => {
    return (index + 1) % columns === 0;
  };

  console.log(imagePath);

  // Function to get the correct image path
  const getImage = (item) => {
    switch (item) {
      case "Investment":
        return require("../assets/images/save-money.png");
      case "Home Insurance":
        return require("../assets/images/home-insurance.png");
      case "Vehicle Insurance":
        return require("../assets/images/car-insurance.png");
      case "Health Insurance":
        return require("../assets/images/healthcare.png");
      case "Life Insurance":
        return require("../assets/images/care.png");
      case "Mortgage":
        return require("../assets/images/mortgage.png");
      case "Property":
        return require("../assets/images/real-estate.png");
      case "Marine":
        return require("../assets/images/car-insurance.png");
      case "Employee Related":
        return require("../assets/images/organization-structure.png");
      case "Motor":
        return require("../assets/images/transportation.png");
    }
  };

  return (
    <Pressable
      // onPress={() =>
      //   router.push({ pathname: "home/image", params: { ...item } })
      // }
      style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}
    >
      <View
        style={[
          styles.image,
          {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
        className="bg-indigo-300 gap-5"
        // source={item?.webformatURL}
        transition={100}
      >
        <Image
          source={getImage(item)}
          style={{ height: hp(7), width: wp(15) }}
          // className="justify-center items-center"
        />
        <Text className="text-2xl font-semibold text-center align-middle">
          {item}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
  },
  imageWrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    borderCurve: "continuous",
    overflow: "hidden",
    marginBottom: wp(2),
  },
  spacing: {
    marginRight: wp(2),
  },
});

export default ImageCard;

// height: hp(2), width: wp(2),

// how to add imagePaths to the ImageCard component
