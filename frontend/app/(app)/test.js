import { View, Text, Platform, KeyboardAvoidingView, ScrollView, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import Test_1 from "../../components/test_1";
import CustomKeyboardView from "../../components/customKeyboardView";

const ios = Platform.OS === "ios";

export default function Test() {
  // const keyboardOffset = Platform.OS === 'ios' ? 150 : 150; 

  // const [keyboardHeight, setKeyboardHeight] = useState(0);

  // useEffect(() => {
  //   const onKeyboardShow = (e) => {
  //     setKeyboardHeight(e.endCoordinates.height); // Add 100px to the keyboard height
  //   };

  //   const onKeyboardHide = () => {
  //     setKeyboardHeight(0);
  //   };

  //   const keyboardDidShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     onKeyboardShow
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     onKeyboardHide
  //   );

  //   return () => {
  //     keyboardDidShowListener.remove();
  //     keyboardDidHideListener.remove();
  //   };
  // }, []);

  return (
    <KeyboardAvoidingView
    // behavior should be padding or height + 100px for the keyboard
    
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={150} // Adjust keyboard offset
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Test_1 />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
