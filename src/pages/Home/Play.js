import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import music from "../../consts/music";
import Slider from '@react-native-community/slider';

const Play = ({route, navigation}) => {
  const music = route.params;
  return (
    <ImageBackground
    source={music.img}
      resizeMode="cover"
      style={{ height: "110%", width: "100%", flex: 1 }}
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,255,0.12)",
          height: 65,
          width: 415,
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100,
          opacity: 0.45,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity   onPress={() => navigation.navigate('Home')}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color="white"
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginTop: 27,
            marginLeft: 150,
          }}
        >
          Player
        </Text>
      </View>
      <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>{music.name}</Text>
          
        </View>
      <View
        style={{
          backgroundColor: "rgba(1,0,0,0.5)",
          height: 288,
          width: 288,
          marginTop: 180,
          marginLeft: 67,
          borderRadius: 120,
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="play-back-outline"
          size={30}
          color="white"
          style={{ marginTop: 120, marginLeft: 60 }}
        />
         <Ionicons
          name="pause-outline"
          size={30}
          color="white"
          style={{ marginTop: 120, marginLeft: 40 }}
        />
        <Ionicons
          name="play-forward-outline"
          size={30}
          color="white"
          style={{ marginTop: 120, marginLeft: 40 }}
        />
      </View>
<View>
  
<Slider
  style={{width: 380, height: 40, marginLeft: 10, flexDirection: 'row'}}
  value={10}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="white"
  onSlidingComplete={() => {}}
/>
</View>
<View style={{flexDirection: 'row', justifyContent: 'space-between', width: 340, marginLeft: 20}}>
  <Text style={{color: 'white'}}>0:00</Text>
  <Text  style={{color: 'white'}}>3:55</Text>
</View>
      <View
        style={{
          backgroundColor: "rgba(1,0,0,0.5)",
          height: 65,
          width: 415,
          borderTopEndRadius: 100,
          borderTopStartRadius: 100,
          opacity: 0.45,
          marginTop: 40,
          flexDirection: "row",
        }}
      >
        <View style={{backgroundColor: 'white', height: 35, width: 35, borderRadius: 20, marginLeft: 69, marginTop: 10}}>
        <Ionicons
          name="heart-outline"
          size={30}
          color="red"
          style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginLeft: 3}}
        /></View>
        <View style={{backgroundColor: 'white', height: 35, width: 35, borderRadius: 20, marginLeft: 99,marginTop: 10}}>
        <Ionicons
          name="bookmark-outline"
          size={30}
          color="black"
          style={{marginLeft: 3 }}
        /></View>
         <View style={{backgroundColor: 'white', height: 35, width: 35, borderRadius: 20, marginLeft: 99,marginTop: 10}}>
        <Ionicons
          name="share-social-outline"
          size={30}
          color="black"
          style={{ }}
        /></View>
      </View>
    </ImageBackground>
  );
};

export default Play;
