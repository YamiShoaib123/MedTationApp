import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1,  padding: 20}}>
      <ScrollView>
      <View style={{ width: "100%", height: 200, alignContent: 'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <Image
          source={require("../SignIn/Muse.png")}
          
        />
        {/* <View style={{width: '100%', height: '20%', backgroundColor: 'white'}}>

        </View> */}
      </View>
      <View>
        <Image
          source={require("../SignIn/surface1.png")}
          style={{
            width: 332,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
            height: 288,
            marginBottom: 20,
          
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#2F5FDB",
          width: 315,
          height: 70,
         alignContent: 'center',
          borderRadius: 10,

          borderRadius: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center',
          alignSelf: 'center'
        }}
        onPress={() => navigation.navigate("SignIn1")}
      >
        <Text
          style={{
            color: "white",
            marginLeft: 30,
            
            fontSize: 20,
          }}
        >
          Sign In
        </Text>
        <Ionicons
          name="arrow-forward-outline"
          size={30}
          color="white"
          style={{  marginRight: 10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderColor: "#2743FD",
          borderWidth: 2,
          width: 315,
          height: 70,
          
          borderRadius: 30,
          marginTop: 20,
          alignItems: 'center',
          alignSelf: 'center',

          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text
          style={{
            color: "#2743FD",
            marginLeft: 30,
           
            fontSize: 20,
          }}
        >
          Sign Up
        </Text>
        <Ionicons
          name="arrow-forward-outline"
          size={30}
          color="#2743FD"
          style={{  marginRight: 10 }}
        />
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
