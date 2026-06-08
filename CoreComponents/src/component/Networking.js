import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Networking = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false)
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false)
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <SafeAreaProvider>
        <SafeAreaView 
            style={styles.loadingContainer}>
          <ActivityIndicator
            size={"large"}
          />
          <Text>Loading...</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 16,
                }}
              />
            )}
            ListEmptyComponent={<Text>No Posts Found</Text>}
            ListHeaderComponent={
              <Text style={styles.headerText}>Post List</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}>End of List</Text>
            }
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  loadingContainer: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Networking;
