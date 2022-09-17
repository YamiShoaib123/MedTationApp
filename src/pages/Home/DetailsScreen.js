import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import upnext from "../../consts/upnext";

const DetailsScreen = ({ navigation, route }) => {
  const plant = route.params;
  const Card1 = ({ upnext }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={{}}>
        <View style={style.card}>
          <View style={{}}>
            <Image source={upnext.img} style={{}} />
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text style={{ fontWeight: "bold" }}>{upnext.name}</Text>
          <Text style={{ fontWeight: "bold" , marginTop: 20, }}>{upnext.about}</Text>
          <View style={{}}>
            <View>
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
              <Icon
                name="pause"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>
          <View style={{}}>
            <View>
              {/* <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text> */}
            </View>
          </View>
          </View>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground style={style.imageContainer} source={plant.img}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{}}>
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color="white"
              style={{}}
            />
          </View>

          <View style={{}}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              Playing Now
            </Text>
          </View>
          <View style={{}}>
            <Ionicons
              name="chevron-down-outline"
              size={30}
              color="white"
              style={{}}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            {plant.name}
          </Text>
        </View>

        {/* <View style={{justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white', justifyContent: 'center', textAlign: 'center', alignContent: 'center', alignSelf: 'center'}}>{plant.name}</Text>
        </View> */}
        <View>
          <Slider
            style={{
              width: 380,
              height: 40,
              marginLeft: 10,
              flexDirection: "row",
              marginTop: 160,
            }}
            value={10}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="white"
            onSlidingComplete={() => {}}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 340,
            marginLeft: 20,
          }}
        >
          <Text style={{ color: "white" }}>0:00</Text>
          <Text style={{ color: "white" }}>3:55</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            borderRadius: 120,
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="play-back-outline"
            size={30}
            color="white"
            style={{}}
          />
          <Ionicons
            name="pause-outline"
            size={30}
            color="white"
            style={{ marginLeft: 40 }}
          />
          <Ionicons
            name="play-forward-outline"
            size={30}
            color="white"
            style={{ marginLeft: 40 }}
          />
        </View>
      </ImageBackground>

      <View style={{ marginTop: 200, padding: 20 }}>
        <Text style={{ fontSize: "16px", fontWeight: "700", color: "#000000" }}>
          Up Next
        </Text>
      </View>

      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={upnext}
          renderItem={({ item }) => {
            return <Card1 upnext={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  // header: {
  //   paddingHorizontal: 20,
  //   marginTop: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  imageContainer: {
    flex: 0.45,

    height: 375,
    width: 411,

    justifyContent: "space-between",
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 7.84,
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  // priceTag: {
  //   backgroundColor: COLORS.green,
  //   width: 80,
  //   height: 40,
  //   justifyContent: 'center',
  //   borderTopLeftRadius: 25,
  //   borderBottomLeftRadius: 25,
  // },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    flexDirection: 'row'
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailsScreen;
