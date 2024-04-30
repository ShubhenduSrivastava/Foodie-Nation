import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FoodCard = ({ title, imageUrl, price, quantity, onIncrement, onDecrement}) => (

  <ScrollView style={{
    backgroundColor: 'white',
    height:hp(25), width:wp(30),
    padding: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    margin:8,
    

  }}>

    <View style={{ flexWrap:"wrap", alignItems:"center", flexDirection:"row", justifyContent:"center", }}>
    <Image source={{uri:imageUrl}} style={{ height:hp(13), width:wp(30), borderRadius:12,  }} />


    <View style={{alignItems:"center", }}>
    <Text style={{
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 5,
    }}>{title}</Text>

    <Text style={{
      fontSize: 13,
      color: 'green',
      marginBottom: 5,
    }}>₹{price.toFixed(2)}</Text>


    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <TouchableOpacity onPress={onDecrement}>
        <Ionicons name="remove-circle" size={24} color="#006A4E" />
      </TouchableOpacity>

      <Text style={{
        marginHorizontal: 15,
        fontSize: 18,
        fontWeight: 'bold',
      }}>{quantity}</Text>

      <TouchableOpacity onPress={onIncrement}>
      <Ionicons name="add-circle" size={24} color="#006A4E" />
      </TouchableOpacity>

    </View>
    </View>
    </View>
  </ScrollView>
);

const App = () => {
  const [foodItems, setFoodItems] = useState([
    { id: '1', title: 'Butter Paneer', price: 180, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1354042949/photo/curd-paneer-masala.jpg?s=612x612&w=0&k=20&c=Q_93IPlKtX71VgeJQDcwWK8J0ut0gWg3H3akCTZqfPs=" },
    { id: '2', title: 'Paneer Tikka', price: 220, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1365548235/photo/spicy-indian-paneer-tikka-cooked-on-a-barbecue-skewer.jpg?s=612x612&w=0&k=20&c=aZ8XebEh2lBXjFuIrxW_pioCyy1z0BlnyhFfe1ABHdA=" },
    { id: '3', title: 'Matar Paneer', price: 200, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1077985338/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=swFslKL4AAbBT7_RyVqKOfRZd9p2nLltyfJVdgsbk5o="},
    { id: '4', title: 'Chola Bhatura', price: 150, quantity: 0, imageUrl: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=612x612&w=0&k=20&c=OLAw-ZleN1UVaa468OlPSAc6dkz2sjehxWevbvZQNew=" },
    { id: '5', title: 'Idli Sambhar', price: 240, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1303091964/photo/delicious-idly-south-indian-foods-background.jpg?s=612x612&w=0&k=20&c=qYvXZcumLrfZN9rWiQMKUWiDf4mw5tKCuNjAcEQGZuA=" },
    { id: '6', title: 'Hakka Noodle', price: 160, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1144505561/photo/chicken-hakka-schezwan-noodles-served-in-a-bowl-with-chopsticks-selective-focus.jpg?s=612x612&w=0&k=20&c=FtgC0ewK1Gqi8GVta9Tjsm9b20QnWpivTxG4SJ_v2-g=" },
    { id: '7', title: 'Mix  Vegetable', price: 90, quantity: 0, imageUrl: "https://media.istockphoto.com/id/920427704/photo/roasted-vegetables.jpg?s=612x612&w=0&k=20&c=KIHwZMuoyZhpjeZuos3QfcdNZat5vk1qH4btG5ZdEV8="},
    { id: '9', title: 'Aalo  Ghobi' , price: 130, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1340864372/photo/indian-style-cauliflower-and-potato-curry-aloo-gobi-vegetarian-dish.jpg?s=612x612&w=0&k=20&c=MCNqpc17aC7bGleFAz-Eokx5gXycpq0CuuONhUJH3w0="},
    { id: '8', title: 'Kadhi Chawal', price: 160, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1322883259/photo/close-up-of-indian-cooked-rice-with-kadi-or-kadhi-over-the-banana-fresh-green-leaf-garnished.jpg?s=612x612&w=0&k=20&c=BJ2W_gaa7zbJLVvOVhk-RBeHdgJhvQt0mmPhN4mC1no=" },
    { id: '10', title: 'Daal  Makhani', price: 190, quantity: 0, imageUrl: "https://media.istockphoto.com/id/531059648/photo/dal-makhani-or-dal-makhani-or-daal-makhni.jpg?s=612x612&w=0&k=20&c=uvKDcXR3WOn-wCFTqK14-oVUe2rCDBdFTwkwJluRogw=" },
    { id: '11', title: 'Paneer Bhurji', price: 200, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1084204416/photo/paneer-bhurji-mildly-spiced-cottage-cheese-scramble-and-served-with-roti-or-laccha-paratha.jpg?s=612x612&w=0&k=20&c=EICx7O7-R__7uvJ9WrHvqO8c5Scr-frEU3sPNiN1ZRM=" },
    { id: '12', title: 'Kebab  Roll', price: 90, quantity: 0, imageUrl: "https://media.istockphoto.com/id/180698997/photo/beef-souvlaki-wrap.jpg?s=612x612&w=0&k=20&c=Zg5VI7rZAB5HU9aH2yCHIdno_I4Dahsae12TC3bKdLo=" },
    { id: '13', title: 'Keema Kebab', price: 120, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1435382579/photo/spicy-bbq-chicken-seekh-kabab-served-in-a-dish-isolated-on-grey-background-top-view-of-indian.jpg?s=612x612&w=0&k=20&c=40msvbV2Z8KrsHsyj7OP4OKdVfsQcPPzuy5elmBh8yo=" },
    { id: '14', title: 'Rumali Roti    ', price: 12, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1404234074/video/indian-famous-food-aloo-paratha-as-seen-from-top.jpg?s=640x640&k=20&c=VILblYlcJKUKZJJv8HiHnyzUIH00AVftpSUtXIsRWV8=" },
    { id: '15', title: 'Lacha Paratha', price: 25, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1471675355/photo/popular-indian-fried-flat-bread-laccha-paratha-made-of-wheat-flour.jpg?s=612x612&w=0&k=20&c=GJY684nzzwK90yJvIlJB6cbJHTc1B6PrdnOzkZb7gsc=" },
    { id: '16', title: 'DoubleEgg roll', price: 50, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1409919857/photo/delicious-indian-street-food-egg-rolls-is-ready-to-eat.jpg?s=612x612&w=0&k=20&c=9vbJmMR0mkF8ctKTTthVZITQMezkCPWZvjkOdUgL3KQ=" },
    { id: '17', title: 'Chicken  Roll', price: 160, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1125036897/photo/chicken-kathi-roll.jpg?s=612x612&w=0&k=20&c=bW7_GkiO56Dzh5LTFAxLEcQIcDXQHIuffbvViu9ECL8=" },
    { id: '18', title: 'Masala  Dosa', price: 130, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=92NTbp2Rd9NzdC75laue3-yc-2XPQI0SMEXUfB8zCC0=" },
    { id: '19', title: 'Kaaju  Katli', price: 1400, quantity: 0, imageUrl: "https://media.istockphoto.com/id/1225627187/photo/delicious-indian-sweet-kaju-katli-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=l9XABMf_h69TO_vRVTOrUbk5-26tLQEeDHiJMU4RTUg=" },
    { id: '20', title: 'Gulaab Jamun', price: 20, quantity: 0, imageUrl: "https://media.istockphoto.com/id/521370061/photo/gulab-jamun-4.jpg?s=612x612&w=0&k=20&c=4qL2caustp1mmpN5D_SbsmC8CSMqjWEdM6_sjilpHNA=" },// Add more food items as needed
  ]);

  const handleIncrement = (id) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleDecrement = (id) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) => (item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item))
    );
  };

  return (
    <ScrollView style={{
      padding: 10,
      backgroundColor: '#f0f0f0',
    }}>
      <Text style={{ fontSize: 15, fontWeight: '900', letterSpacing: 1, marginBottom: 5 }}>Recommended foods for you</Text>
      <FlatList
        data={foodItems}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodCard
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            quantity={item.quantity}
            onIncrement={() => handleIncrement(item.id)}
            onDecrement={() => handleDecrement(item.id)}
          />
        )}
      />
    </ScrollView>
  );
};



export default App;
