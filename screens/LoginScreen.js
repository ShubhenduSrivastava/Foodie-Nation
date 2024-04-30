// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);

  const handleLogin = () => {
    // Replace '123456' with your hardcoded OTP
    const hardcodedOtp = '123456';

    if (otp === hardcodedOtp) {
      setIsOtpCorrect(true);
      Alert.alert('Login Successful!');
      navigation.navigate('Home');
    } else {
      setIsOtpCorrect(false);
      Alert.alert('Login Failed', 'Incorrect OTP. Please try again.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", padding: 10, marginTop: 100 }}>
      <KeyboardAvoidingView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 35, color: '#3E0000', fontWeight: "900", letterSpacing: 2,}}>
            Login
          </Text>
          <LottieView style={{width:wp(45), height: hp(30)}}
        source={require("../cooking.json")} autoPlay loop />
          
          <Text style={{ fontSize: 14, marginTop: 8, fontWeight: "500", letterSpacing: 1 }}>Login to your <Text>FOODIE </Text>account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="mobile" size={24} color="black" />
            <TextInput
              placeholder="Enter Mobile Number"
              keyboardType="numeric"
              value={mobileNumber}
              onChangeText={(text) => setMobileNumber(text)}
              style={{
                borderBottomWidth: 1,
                fontSize: 15,
                width: 250,
                marginLeft: 10,
                borderBottomColor: "gray",
                marginVertical: 10,

              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Octicons name="verified" size={24} color="black" />
            <TextInput
              placeholder="Enter OTP (Hardcoded OTP- 123456)"
              keyboardType="numeric"
              value={otp}
              onChangeText={(text) => setOtp(text)}
              style={{
                borderBottomWidth: 1,
                fontSize: 15,
                width: 250,
                marginLeft: 10,
                borderBottomColor: "gray",
                marginVertical: 10,

              }}
            />
          </View>


        </View>

        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#650000', marginLeft: 50, marginTop: 20, width: wp(50), alignItems: 'center', borderRadius:15, elevation: 7, }}>
          <Text style={{ margin: 10, padding: 5, color: 'white', fontWeight: 'bold', fontSize: wp(5), letterSpacing: 1 }}>
            Login
          </Text>
        </TouchableOpacity>
        {isOtpCorrect && <Text style={{
          color: 'green',
          marginTop: 10,
          marginLeft: 85,
        }}>Login successful!</Text>}
      </KeyboardAvoidingView>
    </SafeAreaView >

  );
};



export default LoginScreen;

