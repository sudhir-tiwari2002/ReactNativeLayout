import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{flex:1, backgroundColor:"plum"}}> 

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightblue" , alignSelf: "flex-start" }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightgreen" ,alignSelf:"flex-end"  }}>Box 2</Box>
      <Box style={{ backgroundColor: "lightpink" , alignSelf:"center"}}>Box 3</Box>
      <Box style={{ backgroundColor: "hotpink" , alignSelf:"strech"}}>Box 4</Box>
      <Box style={{ backgroundColor: "gray" , alignSelf:"auto"}}>Box 5</Box>
      <Box style={{ backgroundColor: "purple" }}>Box 6</Box>
      <Box style={{ backgroundColor: "skyblue",alignSelf:"baseline" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    // flexDirection:"row",
    // justifyContent:"space-between",
    // alignItems:"baseline",
    // alignItems:"center",
    // alignItems:"flex-end",
    // alignItems:"flex-start",
    alignItems:"flex-end", // align self is depend on the align item position 
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
  },
});
