import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.View}>
      <Text style={styles.text}>Log In</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    View:{
        height:50,marginTop:40,justifyContent:'center',alignItems:'center'
    },
    text:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    }
})
export default Header