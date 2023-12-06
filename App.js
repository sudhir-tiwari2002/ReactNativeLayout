import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{flex:1, backgroundColor:"plum"}}> 

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightblue"  }}>Box 1 Shrink</Box>
      <Box style={{ backgroundColor: "lightgreen"  }}>Box 2 Shrink</Box>
      <Box style={{ backgroundColor: "lightpink" ,  }}>Box 3</Box>
      <Box style={{ backgroundColor: "hotpink" ,flexGrow:1 }}>Box 4</Box>
      <Box style={{ backgroundColor: "gray" , flexGrow:1}}>Box 5</Box>
      <Box style={{ backgroundColor: "purple",flexGrow:3 }}>Box 6</Box>
      <Box style={{ backgroundColor: "skyblue", }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    
    
    
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
  },
});
