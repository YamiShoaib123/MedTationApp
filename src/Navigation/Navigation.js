import * as React from 'react';
import { View, Text , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn/SignIn';
import Splash from '../assets/Splash/Splash.png'
import SignIn1 from '../pages/SignIn1/SignIn1';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    function SplashScreen ({navigation}) {
        setTimeout (()  => {
          navigation.replace('SignIn');
        }, 3000);
        return(
          <View style={{flex: 1, justifyContent: 'center', alignContent:'center', alignItems: 'center'}}>
            <Image
            source={Splash}
            style={{height: 800, width: 450}}
             />
           
          </View>
        )
      }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        
        />
        
        <Stack.Screen name="SignIn1" component={SignIn1} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;