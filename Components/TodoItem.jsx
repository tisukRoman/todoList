import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const TodoItem = ({ value, number, deleteItem, id }) => {


    const [focus, setFocus] = React.useState(false);

    const onSelected = () => {
        setFocus(true)
    }
    const offSelected = () => {
        setFocus(false)
    }
    const onTrash = () => {
        deleteItem(id)
    }

    return (
        <TouchableOpacity onLongPress={focus ? offSelected : onSelected} onPress={focus ? offSelected : null}>
            <View style={focus ? styles.active : styles.todo} >
                <Text>{number + '. '}</Text>
                <Text style={styles.text}>{value}</Text>
                {focus && <Text style={styles.trash} onPress={offSelected}>{' ❎ '}</Text> }
                {focus && <Text style={styles.trash} onPress={onTrash}>{' 🗑️ '}</Text> }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        marginTop: 10
    },
    text: {
        flex:1,
    },
    active: {
        flexDirection: 'row',
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        backgroundColor: 'red',
    },
    trash: {
        fontSize: 22,

    }
})
