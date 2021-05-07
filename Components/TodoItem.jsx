import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const TodoItem = ({ value, OpenTodo, id }) => {

    let onOpen = () => {
        OpenTodo(id)
    }

    return (<View>
        <TouchableOpacity onPress={onOpen}>
            <View style={styles.todo}>
                <Text style={styles.text}>{value}</Text>
            </View>
        </TouchableOpacity>
    </View>)
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
        flex: 1,
        fontFamily: 'pangolin',
        lineHeight: 20
    },

})
