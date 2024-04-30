import { ScrollView, Text, View, Pressable, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from "expo-location"

import { Feather } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/services';
import Foodie from '../components/Foodie'


const HomeScreen = () => {
    const [displayCurrentAddress, setdisplayCurrentAddress] = useState("We are loading your location");
    const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    }, []);
    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert(
                "Location services not enabled",
                "Please enable the location services",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        } else {
            setlocationServicesEnabled(enabled)
        }
    }
    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permission Denied",
                "allow teh app to use the location services",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        };

        const { coords } = await Location.getCurrentPositionAsync();
        // console.log(coords);
        if (coords) {
            const { latitude, longitude } = coords;

            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            // console.log(response)

            for (let item of response) {
                let address = `${item.name} ${item.city} ${item.region} ${item.postalCode}`
                setdisplayCurrentAddress(address);
            }
        }
    };

    return (
        <ScrollView>
            <View style={{ padding: 10, marginTop: '10%', flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="location-pin" size={27} color="#650000" />
                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Home</Text>
                    <Text>{displayCurrentAddress}</Text>
                </View>

                <Pressable style={{ marginLeft: "auto", marginRight: 3 }}>
                    <Image style={{ width: 40, height: 40, borderRadius: 20 }}
                        source={{
                            uri: "https://yt3.ggpht.com/yti/AHXOFjUfjZ1nSP_-vWucUzJMlXNkV8ODswd5u_6Vc_FOMQ=s88-c-k-c0x00ffffff-no-rj-mo"
                        }}
                    />
                </Pressable>

            </View>

            <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    margin:'2%',
                    borderWidth: 0.7,
                    borderRadius: 25,
                    borderColor: "#888888"
                }}>
                    <TextInput placeholder='Search for food items' />
                    <Feather name="search" size={24} color="#650000" />
                </View>

                <Carousel/>

                <Services/>

                <Foodie/>

        </ScrollView>
    )
}

export default HomeScreen

