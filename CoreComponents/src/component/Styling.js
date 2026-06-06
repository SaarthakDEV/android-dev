import { View, Text, StyleSheet } from "react-native";

const Styling = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{ children }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 20, height:100, width: 100},
  text: { fontSize: 24, fontWeight: "bold", textAlign: "center", color: "black" },
});

export default Styling;
