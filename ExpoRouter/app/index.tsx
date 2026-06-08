
import { Link, Redirect } from 'expo-router'
import { Text, View } from 'react-native'

const Home = () => {
  console.log("INDEX RENDERED");
  return (
    // <View style={{
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   gap: 20
    // }}>
    //   <Text>Home Page</Text>
    //    <Link href="/about">About</Link>
    //    <Link href="/profile">Profile</Link>
    //    <Link href="/products">Products</Link>
      // <Link href="/missing-route">Missing Route</Link>
    // </View>
    // <Text>Index file</Text>


    <Redirect href="/navigation" />
  )
}

export default Home