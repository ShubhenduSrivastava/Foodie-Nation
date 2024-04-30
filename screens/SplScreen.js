
// SplashScreen.js
import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Text , } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 4000); // 3000 milliseconds (3 seconds) delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView style={{width:wp(45), height: hp(30)}}
        source={require("../huyi.json")} autoPlay loop />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  splash: {
    flexDirection: 'row',
    width: wp(45),
    height:hp(30)
  },
});

export default SplashScreen;
