import React from 'react';
import {
    StyleSheet,
    Image,
    Dimensions, TouchableOpacity, Text, FlatList, View
} from 'react-native';
import COLORS from "../../constants/COLORS";
import {useNavigation} from "@react-navigation/native";
import SHADOW from "../../constants/SHADOW";

const deviceWidth = Dimensions.get('window').width;
const ImagesListItem = ({info, theme}: { theme: string, info: string[] }): JSX.Element => {
    const navigation = useNavigation()
    const TextItem = ({item}: { item: string }) => <Text style={styles.simpleText}>{item}</Text>
    return <View style={styles.container}>
        <Text style={styles.titleText}>{theme}</Text>
        {(info && info.length > 0) ? <FlatList data={info} renderItem={TextItem}/> :
            <Text style={styles.simpleText}>Empty :(</Text>}
    </View>
};
const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        padding:15,
        borderRadius:20,
        width: '90%',
        ...SHADOW,
        backgroundColor: COLORS.white
    },
    titleText: {
        // fontWeight: 'bold'
        fontSize:16
    },
    simpleText: {
        alignSelf: 'center',
        marginVertical: 5,
        color:COLORS.darkgray
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