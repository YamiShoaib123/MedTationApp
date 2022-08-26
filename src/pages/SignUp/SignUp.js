import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const SignIn1 = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 200,
              padding: 30,
            }}
          >
            Sign Up
          </Text>
        </View>
        <View>
          <Text style={{ marginLeft: 30, fontWeight: "100" }}>
            Email Adrress
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View>
          <Text style={{ marginLeft: 30, fontWeight: "100" }}>password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
          <Text style={{ color: "#2F5FDB", marginLeft: 10, fontSize: 18 }}>
            Already have an account?
          </Text>

          <TouchableOpacity style={{ marginLeft: 5 }}>
            <Text
              style={{ color: "#2F5FDB", fontWeight: "bold", fontSize: 18 }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2F5FDB",
            width: 315,
            height: 70,
            marginLeft: 37,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 80,
            borderRadius: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "white",
              marginLeft: 30,
              marginTop: 20,
              fontSize: 20,
            }}
          >
            Sign Up
          </Text>
          <Ionicons
            name="arrow-forward-outline"
            size={30}
            color="white"
            style={{ marginTop: 17, marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomColor: "#2F5FDB",
    padding: 10,
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
});

export default SignIn1;
