import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = (props) => {
  return (
      <Onboarding
      onSkip={() => props.navigation.replace("LoginScreen")}
      onDone={() => props.navigation.navigate("LoginScreen")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../../assets/images/onboarding-img1.png')} />,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../assets/images/onboarding-img2.png')} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../../assets/images/onboarding-img3.png')} />,
          title: 'Become The Star',
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
},
});