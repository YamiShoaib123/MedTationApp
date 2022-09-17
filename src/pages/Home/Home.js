

import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import plants from '../../consts/plants';
import music from '../../consts/music';
const width = Dimensions.get('window').width / 2 - 30;

const HomeScreen = ({navigation}) => {
 
    const Card1 = ({music}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Play', music)}  >
            <View style={style.card}>
              <View style={{alignItems: 'flex-end'}}>
                <View
                 >
                  {/* <Icon
                    name="favorite"
                    size={18}
                    color={plant.like ? COLORS.red : COLORS.black}
                  /> */}
                </View>
              </View>
    
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={music.img}
                  style={{ marginLeft: 160}}
                />
              </View>
    
              {/* <Text style={{fontWeight: 'bold', fontSize: 17, marginBottom: 10, color: 'white', alignContent: 'center', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
                {music.name}
              </Text> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                
                <View
                  >
                  {/* <Text
                    style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                    +
                  </Text> */}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      };

  const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
             >
              {/* <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              /> */}
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{ resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginBottom: 10, color: 'white', alignContent: 'center', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            
            <View
              >
              {/* <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, }}>
      <View style={{ flexDirection: "row", marginLeft: 24, marginTop: 54 }}>
        <Text style={{ fontSize: 30 }}>Hi,</Text>
           <Text style={{ fontSize: 30, fontWeight: "bold" }}>EMMA</Text>
           <Image
            source={require("../Home/profile.png")}
            style={{ height: 58, width: 58, marginLeft: 170 }}
          />
        </View>
        <View style={{ marginLeft: 24 }}>
          <Text style={{ fontSize: 20 }}>How are you feeling today?</Text>
        </View>
        <View
          style={{
            backgroundColor: "#E5E5E5",
            height: 46,
            width: 327,
            marginTop: 30,
            marginLeft: 24,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="search-outline"
            size={30}
            color="#2F5FDB"
            style={{ marginTop: 10, marginLeft: 10 }}
          /> 
       
          <TextInput placeholder="search" />
        </View> 
        <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Quick Meditation
          </Text>
          <FlatList
       horizontal
       showsHorizontalScrollIndicator={false}
       
        data={music}
        renderItem={({item}) => {
          return <Card1 music={item} />;
        }}
      />
         </View>
        <View style={{ padding: 20,  }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Popular searches
          </Text>
         </View>
      <FlatList
        columnWrapperStyle={{marginLeft: 20}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 5,
          paddingBottom: 10,
        }}
        numColumns={2}
       
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      /></ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;