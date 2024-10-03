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
    height:500,
  },
  header:{
    height:190,
    backgroundColor:"tomato",
  },
  main:{
    height:500,
    display: "flex",
    flexDirection:"row"
  },
  section1:{
    width:220,
    backgroundColor:"orange"
  },
  section2:{
    width: 210,
    backgroundColor:"skyblue",
  },
  footer:{
    height:300,
    backgroundColor:"lightgreen",
  }
 
});
export default App