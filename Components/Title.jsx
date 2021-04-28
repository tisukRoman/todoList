import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

export const Title = props => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Список дел   🖊️</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 120,
        fontSize: 20
    },
    wrapper: {
        height: 100,
        backgroundColor: 'blue',
    }
})