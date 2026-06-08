import { StyleSheet, Text, View } from "react-native"


const SettingsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={StyleSheet.text}>SettingsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
})

export default SettingsScreen