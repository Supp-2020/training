import { useState } from 'react';
import { Switch } from 'react-native';
import { Pressable } from 'react-native';
import { Text, View, ScrollView,StyleSheet  } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const styles = StyleSheet.create({
  box : {width : "50%", height : 200, backgroundColor : 'orange', marginBottom : 10},
  firstbox : {marginTop : 50}
  // here width : 200, where 200 is dip density in pixel

})
export default function App() {
  const [widths, setWidths] = useState("50%")
  const [show, setShow] = useState(false)
  let widthHandler = () => {
    setWidths(show ? "50%" : "100%")
    setShow(!show)
  }
  
  
  return (
    <View style={{marginTop : 25}}>
      <ScrollView>
        <Pressable /* onChange={widthHandler} */>
      <View  style={{height : 200, backgroundColor : "red", width : widths}}></View>
        </Pressable>
        <Switch value={show} onChange={widthHandler}></Switch>
        {/* Using Switch we can toggle between the 50% and 100% width */}
      </ScrollView>
    </View>
  );
}

