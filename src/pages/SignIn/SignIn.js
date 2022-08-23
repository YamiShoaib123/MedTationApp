import { View, Text, SafeAreaView , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const SignIn = () => {
  return (
   <SafeAreaView style={{flex:1}}>
    <View style={{flex: 1}}>
        <View style={{}}>

        
    <Image
            source={require('../SignIn/Muse.png')}
            style={{height: 200, width: 230 }}
          />
        
          </View>
          <View >
          <Image
            source={require('../SignIn/surface1.png')}
           style={{width: 332, justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems: 'center', height: 290}}
          />
          </View>
         <TouchableOpacity style={{backgroundColor:'#2F5FDB',
           width: 315,
            height: 70,
            marginLeft: 45,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'space-between'
            
            }}>
            <Text style={{color: 'white',  marginLeft: 30, marginTop: 20, fontSize: 20,}}>Sign In</Text>
            <Ionicons name="arrow-forward-outline" size={30} color="white"  style={{marginTop: 17, marginRight: 10,}}/>
         </TouchableOpacity>
         <TouchableOpacity style={{
              borderColor: '#2743FD',
               borderWidth: 4,
               width: 315,
               height: 70,
            marginLeft: 45,
            marginRight: 25,
            borderRadius: 30,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
            
            }}>
            <Text style={{color:'#2743FD', marginLeft: 30, marginTop: 20, fontSize: 20, }}>Sign In</Text>
            <Ionicons name="arrow-forward-outline" size={30} color="#2743FD"  style={{marginTop: 17, marginRight: 10,}}/>
         </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default SignIn