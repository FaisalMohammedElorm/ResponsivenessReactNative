import { View, Text, StyleSheet } from 'react-native'
import React from 'react' 

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
    height:180,
    backgroundColor:"tomato",
  },
  main:{
    height:500,
    display: "flex",
    flexDirection:"row"
  },
  section1:{
    width:200,
    backgroundColor:"orange"
  }
 
});
export default App