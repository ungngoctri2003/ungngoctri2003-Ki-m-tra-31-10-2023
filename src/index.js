import { SafeAreaView, StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <SafeAreaView>
        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
          <View style={{justifyContent: 'center', alignContent: 'center'}}>
            <TextInput style={{width: 263, height:48, paddingLeft: 40, fontSize: 18, color: '#989898'}}>Search
            </TextInput>
            <Image source={require('./img/iconSearch.png')} style={{position: 'absolute', top: 25}}/>
          </View>

            <Image source={require('./img/Icon_Filter.png')}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center', marginTop: 30}}>
            <Text style={{fontSize: 25, fontWeight: 800, paddingRight: 40}}> 
                Next to you
            </Text>
           <View>
            <Text>
                On the map >
            </Text>
           </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})