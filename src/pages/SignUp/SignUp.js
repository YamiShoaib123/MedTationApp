import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const SignIn1 = ({ navigation }) => {
  const [text, onChangeText] = React.useState("example@test.com");
  const [password, setPassword] = React.useState('');
  const [Confirmpassword, setconfirmPassword] = React.useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View style={{ width: "100%", height: 200,backgroundColor: '#2F5FDB' }}>
        <Image
          source={require("../SignIn/Muse.png")}
          style={{ width: "100%", height: "100%", resizeMode: "cover",  }}
        />
      </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 10,
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
            onChangeText={setPassword}
            value={password}
            placeholder="******"
          />
        </View>
        <View>
          <Text style={{ marginLeft: 30, fontWeight: "100" }}>Confirm password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setconfirmPassword}
            value={Confirmpassword}
            placeholder="******"
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
           
            borderRadius: 10,
            marginTop: 40,
            borderRadius: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
            
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "white",
              marginLeft: 30,
             
              fontSize: 20,
            }}
          >
            Sign Up
          </Text>
          <Ionicons
            name="arrow-forward-outline"
            size={30}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        </ScrollView>
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
