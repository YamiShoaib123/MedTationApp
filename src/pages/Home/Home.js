import { View, Text , SafeAreaView, Image} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  return (
   <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', marginLeft: 24, marginTop: 54}}>
            <Text style={{fontSize: 30}}>Hi,</Text>
            <Text style={{fontSize: 30, fontWeight:'bold'}}>EMMA</Text>
            <Image
            source={require("../Home/profile.png")}
            style={{marginLeft: 180, height: 58, width: 58}}
        />
        </View>
      <View style={{ marginLeft: 24, }}>
      <Text style={{fontSize: 20}}>How are you feeling today?</Text>
      </View>
          <View style={{backgroundColor: '#E5E5E5', height: 46, width: 327, marginTop: 30, marginLeft: 24, borderRadius: 10, flexDirection: 'row'}}>
          <Ionicons
            name="search-outline"
            size={30}
            color="#2F5FDB"
           style={{marginTop: 10, marginLeft: 10}}
          />
                 <Text style={{marginLeft: 14, marginTop: 16, fontWeight: '200'}}>search</Text>
          </View>
    </View>
   </SafeAreaView>
  )
}

export default Home