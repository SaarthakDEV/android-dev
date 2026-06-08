import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Forms = () => {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            secureTextEntry
            keyboardType="numeric"
            autoCapitalize="none"
            // autoCorrect="off"
            multiline
            style={{
              minHeight: 60,
              textAlignVertical: "top",
            }}
          />

          <View styles={styles.switchContainer}>
            <Text style={styles.text}>
              Dark mode
              <Switch
                value={isDarkMode}
                onValueChange={() =>
                  setIsDarkMode((prev) => setIsDarkMode(!prev))
                }
                trackColor={{
                    false: "red",
                    true: "lightblue",
                }}
                thumbColor={"midnightblue"}
              />
            </Text>
          </View>
          <Text>My name is {name}</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default Forms;
