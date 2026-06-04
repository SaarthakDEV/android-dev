import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert
} from "react-native";
import { useState } from "react";

const CoreComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data", "Data hi sahi anhi h", [{
        text: "Cancel",
        onPress: () => console.log("Cancel pressed")
      }])}/>
      <ActivityIndicator size="large" color={"red"} animating={false}/>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden/>
      <ScrollView>
        <View
          style={{ height: 100, width: 100, backgroundColor: "red" }}
        ></View>
        <View
          style={{ height: 100, width: 100, backgroundColor: "lightgreen" }}
        ></View>

        <Text>
          Hello <Text style={{ color: "red" }}>World</Text>
        </Text>
        <Pressable onPress={() => console.log("Image pressed")}>
          <Image
            source={{ uri: "https://picsum.photos/id/237/300/300" }}
            style={{ width: 300, height: 300 }}
          />
        </Pressable>
        <ImageBackground
          source={{ uri: "https://picsum.photos/id/237/300/300" }}
          style={{ color: "white", flex: 1 }}
        >
          <Text>Image text</Text>
        </ImageBackground>

        <Pressable onPress={() => console.log("Text pressed")}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            consequat libero quam, ac tristique est accumsan sit amet. Fusce sed
            sapien metus. Quisque gravida purus risus, ut eleifend risus varius
            vel. Fusce vulputate, dolor nec fringilla accumsan, neque felis
            dictum felis, nec commodo sem dolor in justo. Vestibulum
            sollicitudin gravida ligula, nec finibus ipsum tempor non. Aliquam
            erat volutpat. Cras ligula leo, tempor et tincidunt sit amet,
            sollicitudin vel lectus. Donec sit amet mi massa. Duis ac mauris at
            diam congue tempor ac a magna. Mauris sed dictum elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla et maximus nibh.
            Donec tempus vehicula diam non porta. Nunc gravida, nibh quis
            lacinia lobortis, erat nibh posuere purus, ut tincidunt est sapien
            nec dui. In scelerisque porttitor nisi, vel commodo sapien suscipit
            vitae. Curabitur at blandit nisl, at mollis erat. Fusce eget
            bibendum nunc, at pretium elit. Phasellus bibendum aliquet nunc, et
            congue magna mollis sed. Phasellus porta tellus quis ultrices
            malesuada. Maecenas sed ante finibus, vestibulum tellus condimentum,
            elementum lacus. Donec ullamcorper, urna commodo mollis tempor,
            justo tellus dictum ante, vitae porta ligula arcu et eros. Sed ante
            dui, pretium pharetra ornare ac, consequat sed nulla. Nullam
            suscipit auctor eros vel convallis. Duis congue luctus orci, eu
            commodo purus. Ut vulputate rhoncus dapibus. Proin sed porttitor
            leo. Fusce efficitur velit sed tellus auctor consectetur. Sed
            viverra molestie magna nec tincidunt. Ut turpis purus, facilisis sit
            amet porttitor vel, tincidunt euismod urna. Integer eleifend odio
            mauris, non pulvinar massa scelerisque et. Mauris lacinia feugiat
            facilisis. Nullam urna dui, ultricies non viverra id, vehicula nec
            arcu. Duis a lacus a erat rutrum pellentesque. Aliquam molestie
            pharetra quam. Suspendisse tincidunt, risus id placerat laoreet,
            libero ligula dictum est, ac aliquet odio enim in nisi.
          </Text>
        </Pressable>
      </ScrollView>

      <Button
        title="Press"
        onPress={() => setOpen(true)}
      />

      <Modal visible={open} onRequestClose={() => setOpen(false)} animationType="slide" presentationStyle="formSheet">
        <View style={{ backgroundColor: "blue"}}>
          <Text>Hello world</Text>
          <Button title="Press"
        onPress={() => setOpen(false)}
      />
        </View>
      </Modal>
    </View>
      </>
  );
};

export default CoreComponent;
