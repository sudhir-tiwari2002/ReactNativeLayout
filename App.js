import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{flex:1, backgroundColor:"plum"}}> 

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightblue" , }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightgreen" , }}>Box 2</Box>
      <Box style={{ backgroundColor: "lightpink" , }}>Box 3</Box>
      <Box style={{ backgroundColor: "hotpink" , }}>Box 4</Box>
      <Box style={{ backgroundColor: "gray" , }}>Box 5</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 6</Box>
      <Box style={{ backgroundColor: "skyblue", }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    
    height:300,
    flexWrap:"wrap",
    // alignContent:"flex-start",  // by default 
    // alignContent:"flex-end",
    // alignContent:"center",
    // alignContent:"stretch",
    // alignContent:"space-between",
    alignContent:"space-around",
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
  },
});
