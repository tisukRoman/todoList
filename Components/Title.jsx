import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export const Title = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Список дел  <FontAwesome name='pencil' size={25}/></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 120,
        fontSize: 20,
        fontFamily: 'pangolin',
        letterSpacing: 2
    },
    wrapper: {
        height: 100,
        backgroundColor: 'blue',
    }
})