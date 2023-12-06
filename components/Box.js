import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function Box({children,style}) {
  return (
    <View style={[styles.box,style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    box:{
        // backgroundColor:"#fff",
        padding:20,
       justifyContent:"center",
        width:50,
        height:50
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        
        color:"white"
        
    }
})