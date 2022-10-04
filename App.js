import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Image } from "react-native";
 
const DATA = [
  {
    title: "Magic Items (Clash of Clans)",
    data: [
        {
        name: "Book of Fighting",
        img: "https://static.wikia.nocookie.net/clashofclans/images/f/f0/Book_of_Fighting.png/revision/latest/scale-to-width-down/50?cb=20171220185324",
        },
        {
        name: "Book of Building",
        img: "https://static.wikia.nocookie.net/clashofclans/images/c/ce/Book_of_Building.png/revision/latest/scale-to-width-down/50?cb=20171220185342",
        }, 
        {
        name: "Book of Spells",
        img: "https://static.wikia.nocookie.net/clashofclans/images/3/30/Book_of_Spells.png/revision/latest/scale-to-width-down/50?cb=20171220185357",
        },
        {
        name: "Book of Heroes",
        img: "https://static.wikia.nocookie.net/clashofclans/images/4/46/Book_of_Heroes.png/revision/latest/scale-to-width-down/50?cb=20171220185304",
        },
        {
        name: "Book of Everything",
        img: "https://static.wikia.nocookie.net/clashofclans/images/a/aa/Book_of_Everything.png/revision/latest/scale-to-width-down/50?cb=20171220185224",
        }
    ]
  }
]
 
 const ItemComponent = ({ title, image }) => (
   <View style={styles.item}>
     <Image
         style={styles.tinyLogo}
         source={{
           uri: image,
         }}
       />
     <Text style={styles.title}>{title}</Text>
   </View>
 );
 
 const App = () => (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => <ItemComponent title={item.name} image={item.img}/>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    }
  });
 
  export default App;