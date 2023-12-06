import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{flex:1, backgroundColor:"plum"}}> 

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightblue" , }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightgreen" }}>Box 2</Box>
      <Box style={{ backgroundColor: "lightpink" }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "hotpink" , flex:4}}>Box 4</Box>
      <Box style={{ backgroundColor: "gray" ,flex:3}}>Box 5</Box>
      <Box style={{ backgroundColor: "purple" ,flex:2}}>Box 6</Box>
      <Box style={{ backgroundColor: "skyblue" ,flex:1}}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    // justifyContent:"space-between",
    // alignItems:"baseline",
    // alignItems:"center",
    // alignItems:"flex-end",
    // alignItems:"flex-start",
    alignItems:"stretch",
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
  },
});
