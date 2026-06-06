import React from "react";
import { StyleSheet, View, Platform, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "./PokemonCard";

const App = () => {
  const pokemonData = {
    charmanderData: {
      name: "Charmander",
      image: require("../../assets/charmander.png"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weeknesses: ["Water", "Rock"],
    },
    squirtleData: {
      name: "Squirtle",
      image: require("../../assets/squirtle.png"),
      type: "Water",
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
      weeknesses: ["Electric", "Grass"],
    },
    bulbasaurData: {
      name: "Bulbasaur",
      image: require("../../assets/bulbasaur.png"),
      type: "Grass",
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weeknesses: ["Fire", "Ice", "Flying", "Psychic"],
    },
    pikachuData: {
      name: "Pikachu",
      image: require("../../assets/pikachu.png"),
      type: "Electric",
      hp: 35,
      moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
      weeknesses: ["Ground"],
    },
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <ScrollView>
        {
            Object.entries(pokemonData).map(([key, value]) => <PokemonCard {...pokemonData[key]}/>)
        }
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default App;
