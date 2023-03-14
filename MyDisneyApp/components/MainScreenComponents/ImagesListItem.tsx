import React from 'react';
import {
    StyleSheet,
    Image,
    Dimensions, TouchableOpacity
} from 'react-native';
import COLORS from "../../constants/COLORS";
import {useNavigation} from "@react-navigation/native";

const deviceWidth = Dimensions.get('window').width;
const ImagesListItem = ({character}: { character: Character }): JSX.Element => {
    const navigation = useNavigation()
    // @ts-ignore
    return <TouchableOpacity onPress={() => navigation.navigate("Character", {
        character: character,
    })}>
        <Image style={styles.item} resizeMode={'cover'}
               source={character.imageUrl ? {uri: character.imageUrl} : require('../../assets/no_image.jpg')}/>
    </TouchableOpacity>
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: COLORS.lightgray,
        borderRadius: 20,
        margin: 4,
        width: deviceWidth / 2 - 4 * 2,
        height: deviceWidth / 2 - 4 * 2,
    },
});
export default ImagesListItem;