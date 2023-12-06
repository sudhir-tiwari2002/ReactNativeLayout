import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{flex:1, backgroundColor:"plum"}}> 

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightblue"  ,flexShrink:1,}}>Box 1 Shrink</Box>
      <Box style={{ backgroundColor: "lightgreen" ,flexShrink:1, }}>Box 2 Shrink</Box>
      {/* <Box style={{ backgroundColor: "lightpink" , flexBasis:140 }}>Box 3</Box>
      <Box style={{ backgroundColor: "hotpink" , height:140}}>Box 4</Box>
      <Box style={{ backgroundColor: "gray" , }}>Box 5</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 6</Box>
      <Box style={{ backgroundColor: "skyblue", }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    alignItems:"flex-start",
    
    width:200,
    
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
  },
});
