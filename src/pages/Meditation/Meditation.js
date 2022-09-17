import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import meditate from "../../consts/meditate";
import music from "../../consts/music";
import COLORS from "../../consts/colors";
import Recently from "../../consts/Recently";
import morning from "../../consts/morning";
import stress from "../../consts/stress";

import Ionicons from "@expo/vector-icons/Ionicons";

const Meditation = ({navigation}) => {
  const Card2 = ({ meditate }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', meditate)}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View>
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
              alignItems: "center",
            }}
          >
            <Image source={meditate.img} style={{ marginTop: 10 }} />
          </View>
          <View
            style={{
              backgroundColor: "white",
              opacity: 0.45,
              height: 58,
              width: 160,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: 10,
                textTransform: "capitalize",
                textAlign: "center",
                lineHeight: "15px",
                color: "gray",
              }}
            >
              {meditate.name}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: 20,
                color: "black",
                textAlign: "center",
              }}
            >
              {meditate.about}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            {/* <View>
              <Text
                    style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                    +
                  </Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Card3 = ({ Recently }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View>
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
              alignItems: "center",
            }}
          >
            <Image source={Recently.img} style={{ marginTop: 10 }} />
          </View>
          <View
            style={{
              backgroundColor: "white",
              opacity: 0.45,
              height: 58,
              width: 160,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: 10,
                textTransform: "capitalize",
                textAlign: "center",
                lineHeight: "15px",
                color: "gray",
              }}
            >
              {Recently.name}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: 20,
                color: "black",
                textAlign: "center",
              }}
            >
              {Recently.about}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            {/* <View>
              <Text
                    style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                    +
                  </Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Card5 = ({ stress }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View>
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
              alignItems: "center",
            }}
          >
            <Image source={stress.img} style={{ marginTop: 10 }} />
          </View>
          <View
            style={{
              backgroundColor: "white",
              opacity: 0.45,
              height: 58,
              width: 160,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: 10,
                textTransform: "capitalize",
                textAlign: "center",
                lineHeight: "15px",
                color: "gray",
              }}
            >
              {stress.name}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: 20,
                color: "black",
                textAlign: "center",
              }}
            >
              {stress.about}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            {/* <View>
              <Text
                    style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                    +
                  </Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };


  const Card4 = ({ morning }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View>
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
              alignItems: "center",
            }}
          >
            <Image source={morning.img} style={{ marginTop: 10 }} />
          </View>
          <View
            style={{
              backgroundColor: "white",
              opacity: 0.45,
              height: 58,
              width: 160,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: 10,
                textTransform: "capitalize",
                textAlign: "center",
                lineHeight: "15px",
                color: "gray",
              }}
            >
              {morning.name}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: 20,
                color: "black",
                textAlign: "center",
              }}
            >
              {morning.about}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            {/* <View>
              <Text
                    style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                    +
                  </Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };


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
        <View style={{ marginLeft: 10}}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color="white"
            style={{ marginTop: 20, }}
          />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
           
            marginTop: 27,
            marginLeft: 150
           
          }}
        >
          Music
        </Text>
      </View>

        <ScrollView style={{}}>
      
      <View style={{ }}>
        <Text
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#3A3A3A",
            marginTop: 37,
            marginLeft: 25,
          }}
        >
          Most Recommended
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={meditate}
          renderItem={({ item }) => {
            return <Card2 meditate={item} />;
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#3A3A3A",

            marginLeft: 25,
          }}
        >
          Recently Played
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Recently}
          renderItem={({ item }) => {
            return <Card3 Recently={item} />;
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#3A3A3A",

            marginLeft: 25,
          }}
        >
          Morning Meditation
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={morning}
          renderItem={({ item }) => {
            return <Card4 morning={item} />;
          }}
        />
      </View>

      <View >
        <Text
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#3A3A3A",

            marginLeft: 25,
          }}
        >
          Stress Meditation
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={stress}
          renderItem={({ item }) => {
            return <Card5 stress={item} />;
          }}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
  },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,

    borderRadius: 10,

    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
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

export default Meditation;
