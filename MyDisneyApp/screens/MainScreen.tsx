import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  TextInput,
} from "react-native";
import API from "../API";
import ImagesList from "../components/MainScreenComponents/ImagesList";
import COLORS from "../constants/COLORS";
import SHADOW from "../constants/SHADOW";
// import {sampleData} from './SampleData';
const MainScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    API.getAllCharacters().then((characters_loaded) => {
      console.log("[i] set characters_loaded", characters_loaded.data);
      setCharacters(characters_loaded.data);
    });
  }, []);

  const searchCharacters = () => {
    if (searchText.replace(" ", "") == "") {
      API.getAllCharacters().then((characters_loaded) => {
        console.log("[i] set characters_loaded", characters_loaded.data);
        setCharacters(characters_loaded.data);
      });
    } else {
      API.getSearchCharacters(searchText).then((characters_loaded) => {
        console.log("[i] set characters_loaded", characters_loaded.data);
        setCharacters(characters_loaded.data);
      });
    }
  };

  return characters && characters.length > 0 ? (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Disney</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={(newSearchText) => setSearchText(newSearchText)}
          onSubmitEditing={searchCharacters}
        />
      </View>
      <ImagesList data={characters} />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Disney</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={(newSearchText) => setSearchText(newSearchText)}
          onSubmitEditing={searchCharacters}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: 0,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    height: 35,
    borderRadius: 20,
    borderColor: COLORS.gray,
    textAlign: "center",
    padding: 10,
    ...SHADOW,
    backgroundColor: "white",
  },
  titleText: {
    flex: 2,
    fontSize: 60,
    textAlign: "left"
  },
});
export default MainScreen;
