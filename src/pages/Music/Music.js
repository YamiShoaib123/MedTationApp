import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

const Music = () => {
  return (
   <SafeAreaView style={{flex: 1, padding: 10}}>
    <View
        style={{
          backgroundColor: "#2F5FDB",
          height: 65,
          width: 415,
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100,

          flexDirection: "row",
          justifyContent: 'center',

          
        }}
      >
        <View style={{ }}>
         
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color="white"
            style={{ marginTop: 20, marginRight: 130}}
          />
        </View>
        <View style={{}}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
           
            marginTop: 27,
            marginRight: 140
            
           
          }}
        >
          Meditation
        </Text>
        </View>
      </View>
   </SafeAreaView>
  )
}

export default Music