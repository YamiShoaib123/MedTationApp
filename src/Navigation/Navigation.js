import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn/SignIn";
import Splash from "../assets/Splash/Splash.png";
import SignIn1 from "../pages/SignIn1/SignIn1";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Meditation from "../pages/Meditation/Meditation";
import Profile from "../pages/Profile/Profile";
import Music from "../pages/Music/Music";

import DetailsScreen from "../pages/Home/DetailsScreen";

import Play from "../pages/Home/Play";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          
          
         borderTopLeftRadius: 12,
         borderTopRightRadius: 12,
          backgroundColor: '#2F5FDB',
          

        }
      }}
    
    // screenOptions={{headerShown: false,
    
       
    // }}
    tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        
        
        
            

     }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Image
              source={require('../assets/Home.png')}
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Meditation"
        component={Meditation}
        options={{
            tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Image
              source={require('../assets/meditation.png')}
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={Music}
        options={{
            tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Image
              source={require('../assets/Music.png')}
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
      
        name="Profile"
        component={Profile}
        options={{
            tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Image
              source={require('../assets/profile.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
     
      
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

const Navigation = () => {
  function SplashScreen({ navigation }) {
    setTimeout(() => {
      navigation.replace("SignIn");
    }, 3000);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={Splash} style={{ height: 800, width: 450 }} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="SignIn1" component={SignIn1} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Play" component={Play} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
