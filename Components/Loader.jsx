import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

const Loader = () => {
    return <View style={styles.wrapper}>
        <ActivityIndicator size="large" />
    </View>
}

export default Loader

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})