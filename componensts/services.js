import { ScrollView, Text, View, Pressable, Image } from 'react-native'
import React from 'react'


const Services = () => {
    const services = [
        {
            id: "0",
            image: "https://media.istockphoto.com/id/1305451864/photo/biryani.jpg?s=612x612&w=0&k=20&c=myS23vJLtxpHp3LSRm0NU3rU30s8aLb45UHs8mfY8KA=",
            name: "Biryani",
        },
        {
            id: "11",
            image: "https://media.istockphoto.com/id/1145428159/photo/north-indian-food-platter-or-thali.jpg?s=612x612&w=0&k=20&c=Hx_lNmuTGLTYzLDWqXU0Dpcry0TWV9lbuhZQYeazeX0=",
            name: "North Indian",
        },
        {
            id: "12",
            image: "https://media.istockphoto.com/id/453780395/photo/chicken-chow-mein.jpg?s=612x612&w=0&k=20&c=KMwd2tqZLtJb2MyLH6ZixzXReAX5oaT3QANc7As2v5k=",
            name: "Chinese",
        },
        {
            id: "13",
            image: "https://media.istockphoto.com/id/831559854/photo/vanilla-ice-cream-cake-with-frozen-berries.jpg?s=612x612&w=0&k=20&c=Lm_GeMUyQ0ZLd7UUMxGFrJds8MKY0h-uB1Nbm08URW4=",
            name: "Cakes",
        },
        {
            id: "14",
            image: "https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=QHrM65XqDQd3Z50r5cT2qV4nwctw6rNMM1JTlGEEVzI=",
            name: "Pizza",
        },
        {
            id: "15",
            image: "https://media.istockphoto.com/id/1413669079/photo/cheeseburger-with-grilled-red-bell-pepper-arugula-and-dill-pickles.jpg?s=612x612&w=0&k=20&c=ubfc1KFe5oclqqKr7pzvkuMVb_kttE0SoVxIqmpyymw=",
            name: "Burger",
        },
        {
            id: "16",
            image: "https://media.istockphoto.com/id/669354148/photo/nepalese-traditional-dumpling-momos.jpg?s=612x612&w=0&k=20&c=wbxiXCyVOBPgVzsQcVU77oFtHiKoiAAEWbFjdTB4RaA=",
            name: "Momos",
        },
        {
            id: "17",
            image: "https://media.istockphoto.com/id/1024558340/photo/group-of-south-indian-food-like-masala-dosa-uttapam-idli-idly-wada-vada-sambar-appam-semolina.jpg?s=612x612&w=0&k=20&c=IKtnX2A49kpCYI85ZV2V0YjDlOogyS9cjNN3hWpCDZk=",
            name: "South Indian",
        },
    ];
    return (
        <View style={{padding:10}}>
            <Text style={{fontSize:15, fontWeight:'900', letterSpacing:1}}>Hey, what's in your mind?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator>
                {services.map((service, index) => (
                    <Pressable style={{ padding:7, }} key={index}>
                      <Image source={{uri:service.image}} style={{height:70, width:70, borderRadius:50, }} />
                      <Text style={{textAlign:"center",marginTop:5, fontWeight:"500", fontSize:13}}>{service.name}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

export default Services

