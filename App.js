import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const {height, width} = Dimensions.get("window");
const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}/>

      {/* Main */}
      <View style={styles.main}>
        <View style={styles.section1}/>
        <View style={styles.section2}/>
      </View>
      {/* Footer */}
      <View style={styles.footer}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flex:1,
    backgroundColor:"tomato",
  },
  main:{
    flex:4,
    display: "flex",
    flexDirection:"row"
  },
  section1:{
    flex:1,
    backgroundColor:"orange"
  },
  section2:{
    flex:1,
    backgroundColor:"skyblue",
  },
  footer:{
    flex:1,
    backgroundColor:"lightgreen",
  }
 
});
export default App