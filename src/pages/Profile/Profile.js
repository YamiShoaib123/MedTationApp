import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  linedata,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Slider from "@react-native-community/slider";

//   const line = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43],
//         strokeWidth: 2, // optional
//       },
//     ],
//   };

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#2F5FDB",
          height: 65,
          width: 415,
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100,

          flexDirection: "row",
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color="white"
            style={{ marginTop: 20 }}
          />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginTop: 27,
            marginLeft: 150,
          }}
        >
          Profile
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Image
          source={require("../Home/profile.png")}
          style={{
            height: 99,
            width: 99,
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 100,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Ionicons name="settings-outline" size={25} color="black" />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: "18px",
            color: "#3A3A3A",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Emma Watson
        </Text>
        <Text
          style={{
            fontWeight: "700",
            fontSize: "12px",
            color: "#2F5FDB",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Edit your profile
        </Text>
        <View
          style={{
            backgroundColor: "#2F5FDB",
            height: 2,
            width: 100,
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}
        ></View>
      </View>
      <View
        style={{
          width: 327,
          height: 96,
          backgroundColor: "#2F5FDB",
          borderRadius: "12px",
          justifyContent: "center",
          
          alignSelf: 'center',
          marginTop: 20
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: 'space-around',   }}>
          <Text
            style={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
          >
            Progress
          </Text>
          <Text
            style={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
          >
            45%
          </Text>
        </View>
        <View>
        <Slider
          style={{
            width: 270,
            height: 40,
            marginLeft: 30,
            flexDirection: "row",
          }}
          value={10}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="white"
          onSlidingComplete={() => {}}
        />
      </View>
      </View>
     

    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
