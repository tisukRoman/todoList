import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const Empty = () => {
    return (
        <View style={styles.empty}>
            <Text style={styles.text}>
                Пока нету дел...
            </Text>
        </View>
    )
}

export default Empty

const styles = StyleSheet.create({
    empty:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontFamily: 'pangolin',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
})
