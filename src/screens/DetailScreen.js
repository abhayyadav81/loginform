import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api, { list } from '../components/Api'
import GetLocation from 'react-native-get-location'
import * as Location from 'expo-location';



const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState({})
  const [location, setLocation] = useState({})


  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  // })
  // .then(location => {
  //     console.log(location);
  // })
  // .catch(error => {
  //     const { code, message } = error;
  //     console.warn(code, message);
  // })

  const locati = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    // console.log(location)
  }
  useEffect(() => {
    list().then((response) => {console.log(response), setResult(response.data) }).catch((err) => { console.log(err) })

  
  }, [])

  useEffect(() => {
    
   setTimeout(()=>{locati()
  },1000) 
  }, [location])



  return (
    <View style={styles.View}>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{ fontSize: 20, marginTop: 50, marginLeft: 220, color: 'white', fontWeight: 'bold' }}>Log Out</Text>
      </TouchableOpacity>

      <Image style={styles.Image} source={require('../assets/ff.png')} />
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{result?.[0]?.name}</Text>
      <Text style={{ fontWeight: 'bold' }}>{result?.[0]?.city}</Text>
      <Text style={{ marginTop: 20,color:'#C0392B' }}>Your location</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20 }}>{location?.coords?.latitude+','}</Text>
        <Text style={{ fontSize: 20 }}>{location?.coords?.longitude}</Text>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  Image: {
    height: 150,
    width: 150,
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 120,
    borderRadius: 80


  },
  View: {
    alignItems: 'center',
    backgroundColor: '#229954',
    height: 300

  }
})
export default DetailScreen

