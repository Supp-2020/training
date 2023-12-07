import { View, Text,Image,ScrollView } from 'react-native';
import axios from 'axios';  
import { useEffect, useState } from 'react';
export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
    .then( (res) => {setData(res.data.data)})
    .catch( (err) => {console.log(err)})
  },[])
  return (
    <ScrollView>
    <View style={{marginTop : 25}}>
      {data.map((val) => 
        <View key={val.id} style={{width : 200, height : 150, backgroundColor : "skyblue", margin : 10, borderRadius : 10, padding : 10}}>
          <Text>{val.first_name+" "+val.last_name}</Text>
          <Image style={{width : 100, height : 100, borderRadius : 10}} source={{ uri : val.avatar }}></Image>
          <Text>{val.email}</Text>
        </View>
      )}
    </View>
    </ScrollView>
  )       
}