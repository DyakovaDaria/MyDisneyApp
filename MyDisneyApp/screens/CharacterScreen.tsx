import React from 'react';
import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions, FlatList, ScrollView
} from 'react-native';
import COLORS from "../constants/COLORS";
import SHADOW from "../constants/SHADOW";
import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';
import InfoList from "../components/CharacterScreenComponents/InfoList";
import {useNavigation} from "@react-navigation/native";


const deviceWidth = Dimensions.get('window').width;
const CharacterScreen = (props) => {
    const navigation = useNavigation()
    const {
        _id,
        imageUrl,
        name,
        url,

        allies,
        enemies,
        films,
        parkAttractions,
        shortFilms,
        tvShows,
        videoGames
    } = props.route.params.character
    console.log('[i] CharacterScreen props.route.params', props.route.params.character)
    return <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topContainer}>
            <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                <Ionicons name="ios-chevron-back" size={deviceWidth / (5 * 4)} color={COLORS.darkgray}/>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="star" size={deviceWidth / (5 * 4)} color={COLORS.darkgray}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Feather name="edit-2" size={deviceWidth / (5 * 4)} color={COLORS.darkgray}/>
                </TouchableOpacity>
            </View>
        </View>
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <View style={styles.subcontainer}>
            <Text style={styles.nameText}>{name}</Text>
            <InfoList theme={'allies'} info={allies}/>
            <InfoList theme={'enemies'} info={enemies}/>
            <InfoList theme={'films'} info={films}/>
            <InfoList theme={'parkAttractions'} info={parkAttractions}/>
            <InfoList theme={'shortFilms'} info={shortFilms}/>
            <InfoList theme={'tvShows'} info={tvShows}/>
            <InfoList theme={'videoGames'} info={videoGames}/>
        </View>
    </ScrollView>
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 40,
        // alignItems:"center"
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10,
    },
    subcontainer: {
        alignItems: "center"
    },
    button: {
        width: deviceWidth / (5 * 2),
        height: deviceWidth / (5 * 2),
        marginVertical: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: COLORS.white,
        ...SHADOW
    },
    image: {
        alignSelf: 'center',
        backgroundColor: COLORS.lightgray,
        borderRadius: 20,
        margin: 4,
        width: deviceWidth / 2 - 4 * 2,
        height: deviceWidth / 2 - 4 * 2,
    },
    nameText: {
        fontSize: 30,
        marginBottom:20,

    }
})

export default CharacterScreen;