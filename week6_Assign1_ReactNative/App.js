import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, Modal, ImageBackground, Button } from 'react-native';

const herolist = [
  { title: "ironman", poster: require("./assets/images/ironman.jpg") },
  { title: "batman", poster: require("./assets/images/batman.jpg") },
  { title: "superman", poster: require("./assets/images/superman.jpg") },
  { title: "antman", poster: require("./assets/images/antman.jpg") },
  { title: "spiderman", poster: require("./assets/images/spiderman.jpg") },
  { title: "hulk", poster: require("./assets/images/hulk.jpg") },
  { title: "wonderwoman", poster: require("./assets/images/wonderwoman.jpg") },
  { title: "captainamerica", poster: require("./assets/images/captainamerica.jpg") },
  { title: "captainmarvel", poster: require("./assets/images/captainmarvel.jpg") },
  { title: "deadpool", poster: require("./assets/images/deadpool.jpg") },
  { title: "doctorstrange", poster: require("./assets/images/doctorstrange.jpg") },
  { title: "falcon", poster: require("./assets/images/falcon.jpg") },
  { title: "joker", poster: require("./assets/images/joker.jpg") },
]
export default function App() {
  let mobwidth = Dimensions.get("screen").width
  return (
      <View style={{ marginTop : 20, marginLeft : 10, marginRight :  10 ,display: "flex", }}>
        <View style={{ height: 70, width: mobwidth, display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "blue" }}>
          <Image style={{ height: 70, width: 70 }} source={{ uri: "https://i.ibb.co/cwVxGDM/22.jpg" }} />
          <Text style={{ backgroundColor: "orange", height: 70, textAlignVertical: "center", verticalAlign: 'middle'}}>Logo Name</Text>
        </View>
        <ScrollView>
          <View style={{ flexDirection: "row",flexWrap: "wrap",justifyContent: "space-between", }}>
            {herolist.map((val, idx) => (
              <View key={idx}>
                <ImageBackground style={{ height: 175, width: 175, display : 'flex', justifyContent : "space-between", margin : 5}} source={val.poster}>
                  <Text></Text>
                  <Text style={{height: 30, backgroundColor: "grey", opacity: 0.9, textAlign : "center" , fontSize : 22, alignContent : "center"}}>{val.title}</Text>
                </ImageBackground>
              </View>))}
          </View>
        </ScrollView>        
      </View>
  );
}
