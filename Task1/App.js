import { StatusBar } from 'expo-status-bar';
import {View ,Image,SafeAreaView, ScrollView} from 'react-native';
//import { SafeAreaView, ScrollView} from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView style={{marginTop:"60%"}}>
    <ScrollView horizontal showHorizontalScrollIndicator={false}>
      <View>
        <Image style={{width:400,height:300,marginRight:10}} source={require("./assets/images/cat1.jpg")}></Image>
      </View>
      <View >
        <Image style={{width:400,height:300,marginRight:10}} source={require("./assets/images/cat2.jpg")}></Image>
      </View>
      <View>
        <Image style={{width:400,height:300,marginRight:10}} source={require("./assets/images/cat3.jpg")}></Image>
      </View>
      <View >
        <Image style={{width:400,height:300,marginRight:10}} source={require("./assets/images/cat4.jpg")}></Image>
      </View>
      <View>
        <Image style={{width:400,height:300,marginRight:10}} source={require("./assets/images/cat5.jpg")}></Image>
      </View>
      <View >
        <Image style={{width:400,height:300,marginRight:10}} source={require("./assets/images/rabbit.png")}></Image>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//      justifyContent: 'center',
//      marginTop:30
//   },
//}
//);
