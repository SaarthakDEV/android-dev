import { FlatList, View, Text, SectionList } from "react-native";
import pokemonData from "../data.json";
import groupedPokemonList from "../grouped-data.json";

const FlatListRender = () => {
  return (
    // <FlatList data={pokemonData} renderItem={({item}) => (
    //     <View>
    //         <Text style={{color: "black"}}>{item.type}</Text>
    //         <Text style={{color: "black"}}>{item.name}</Text>
    //     </View>
    // )}
    //     keyExtractor={(item, index) => item.id.toString()}
    //     ItemSeparatorComponent={<View style={{ height: 16 }} />}
    //     ListEmptyComponent={<Text>No items available</Text>}
    //     ListHeaderComponent={<Text>Pokemon List</Text>}
    //     ListFooterComponent={<Text>Pokemon List Ends</Text>}
    // />

    <SectionList
      sections={groupedPokemonList}
      renderItem={({ item }) => (
        <View>
          <Text style={{ color: "black" }}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text>{section.type}</Text>
      )}
      ItemSeparatorComponent={() => <View style={{height: 12}}/>}
      SectionSeparatorComponent={({ section }) => <View style={{ height: 24, backgroundColor: "lightblue"}}><Text>Section {section.type} ends</Text></View>}
    />
  );
};

export default FlatListRender;
