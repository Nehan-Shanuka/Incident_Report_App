import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "./loading";
import CustomKeyboardView from "./customKeyboardView";
import { useAuth } from "../context/authContext";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function Test_1() {
  const router = useRouter();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  console.log("Test_1");

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign Up", "Please fill all the fields!");
      return;
    }
    setLoading(true);

    let response = await register(
      emailRef.current,
      passwordRef.current,
      usernameRef.current,
      profileRef.current
    );
    setLoading(false);

    // console.log('got result: ', response);
    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    }
  };

  console.log("Test_2");

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
    console.log("date: ", currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTime(false);
    setTime(currentTime);
    console.log("time: ", currentTime); 
  };

  const showDateDatePicker = () => {
    setShowDate(true);
  };

  const showTimeDatePicker = () => {
    setShowTime(true);
  };

  return (
    <View className="pb-40">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* signIn image */}
        {/* <View className="items-center">
          <Image
            style={{ height: hp(20) }}
            resizeMode="contain"
            source={require("../assets/images/register.png")}
          />
        </View> */}

        {
          // incident subject
          // date
          // time
          // location
          // property
          // vehicle number
          // property address
          // description
        }

        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            Incident Report
          </Text>

          {/* inputs */}
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <AntDesign name="form" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (usernameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Incident Subject"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
              />
            </View>
            <View className="flex-row justify-between" style={{ height: hp(7), width: wp(90) }}>
            <View
              style={{ height: hp(7), width: wp(43) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <AntDesign name="form" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (usernameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Date"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
              />
            </View>
            <View
              style={{ height: hp(7), width: wp(43) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <AntDesign name="form" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (usernameRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Time"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
              />
            </View>
            </View>

            {/* <Pressable onPress={showDateDatePicker}>
              <Text>Date</Text>
            </Pressable>

            {showDate && <RNDateTimePicker value={date} mode="date" onChange={onChangeDate}/>}

            <Pressable onPress={showTimeDatePicker}>
              <Text>Time</Text>
            </Pressable>

            {showTime && <RNDateTimePicker value={time} mode="time" onChange={onChangeTime}/>} */}

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <AntDesign name="form" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Location"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
              />
            </View>

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <AntDesign name="form" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Property Type"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
                secureTextEntry={true}
              />
            </View>

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <AntDesign name="form" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (profileRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Vehicle Number(In case of a Vehicle)"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
              />
            </View>

            {/* inputs */}
            <View className="gap-4">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
              >
                <AntDesign name="form" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (usernameRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Property Address(In case of a Property)"
                  placeholderTextColor={"gray"}
                  cursorColor={"gray"}
                />
              </View>

              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
              >
                <AntDesign name="form" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (emailRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Description of the Incident"
                  placeholderTextColor={"gray"}
                  cursorColor={"gray"}
                />
              </View>

              {/* <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
                secureTextEntry={true}
              />
            </View> */}

              {/* <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl"
            >
              <Feather name="image" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={(value) => (profileRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Profile Picture URL"
                placeholderTextColor={"gray"}
                cursorColor={"gray"}
              />
            </View> */}
            </View>

            {/* submit button */}

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)} />
                </View>
              ) : (
                <TouchableOpacity
                  // onPress={handleRegister}
                  style={styles.touchableOpacity}
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className="text-white font-bold tracking-wider"
                  >
                    Report
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* sign up text */}
            {/* <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Already have an Account?{" "}
              </Text>
              <Pressable onPress={() => router.push("signIn")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-indigo-500"
                >
                  Sign In
                </Text>
              </Pressable>
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "#6366F1", // Tailwind's indigo-500 color
    justifyContent: "center",
    alignItems: "center",
    height: hp(6.5),
    // responsive rounded-xl
    borderRadius: hp(3) / 2,
  },
});
