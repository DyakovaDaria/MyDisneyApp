import React from 'react';
import {
    StyleSheet,
    FlatList,
    StatusBar
} from 'react-native';
import ImagesListItem from "./ImagesListItem";

const List = ({data}: { data: Array<Character> }): JSX.Element => {
    const renderItem = ({item}: { item: Character }) => <ImagesListItem character={item}/>;
    return (<FlatList style={styles.container}
                      data={data}
                      numColumns={2}
                      renderItem={renderItem}
                      keyExtractor={(item: Character) => item._id.toString()}
    />);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        paddingTop: StatusBar.currentHeight || 0 + 0,
        marginHorizontal: 0,
    },
});
export default List;