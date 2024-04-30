import { Text, View } from 'react-native'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";


const Carousel = () => {
    const images = [
        "https://media.istockphoto.com/id/1048400936/photo/whole-italian-pizza-on-wooden-table-with-ingredients.jpg?s=612x612&w=0&k=20&c=_1GwSXSjFeC06w3MziyeqRk5Lx-FMXUZzCpxEOoHyzQ=",
        "https://media.istockphoto.com/id/496389174/photo/delicious-hamburgers.jpg?s=612x612&w=0&k=20&c=vnRqLGfUhTIdcuBH9kr60nPXpd4lTZeSOeZkAsG_G5w=",
        "https://media.istockphoto.com/id/502708516/photo/italian-pasta-alla-norma-close-up-and-ingredients-horizontal-to.jpg?s=612x612&w=0&k=20&c=9c7HsKEWYRn1co5f6Jct7Z1nWTP1YVlqj_stRUvXLqM=",
        "https://media.istockphoto.com/id/1256958573/photo/chilli-paneer-or-spicy-cottage-cheese-garnish-with-capsicum-onion-cabbage-and-spring-onion.jpg?s=612x612&w=0&k=20&c=81jAhcd9h--PeHTZxF-wAzflwcXx2P0ws6hXvoXF2Nc=",
        "https://media.istockphoto.com/id/523041362/photo/indian-sweets.jpg?s=612x612&w=0&k=20&c=scDx9VW5phPYtB0D5Z6KBxvJ96B8VWC2b1Ckgujf7JE=",
    ];
    return ( 
        <View>
           <SliderBox
           images={images}
           autoplay={true}
           autoplayInterval={3000}
           horizontal={true}
           circleLoop
           dotColor={"#13274F"}
           inactiveDotColor="#90A4AE"
           ImageComponentStyle={{
            borderRadius:10,
            width:"94%",
            
           }}
           />
        </View>
    )
}

export default Carousel

