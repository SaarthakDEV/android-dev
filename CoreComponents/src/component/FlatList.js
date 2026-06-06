import { FlatList, View, Text } from "react-native"
import pokemonData from "../data.json"

const FlatListRender = () => {
  return (
    <FlatList data={pokemonData} horizontal renderItem={({item}) => (
        <View>
            <Text style={{color: "black"}}>{item.type}</Text>
            <Text style={{color: "black"}}>{item.name}</Text>
        </View>
    )}
        keyExtractor={(item, index) => item.id.toString()}
    />
  )
}

export default FlatListRender