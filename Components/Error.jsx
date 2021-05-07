import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import AppButton from '../UI/AppButton'

const Error = ({error, func}) => {


    return (
        <View style={styles.error}>
            <Text style={styles.errorText}>
                {error}
            </Text>
            <AppButton onPress={func}>
                ПОВТОРИТЬ
            </AppButton>
        </View>
    )
}
export default Error

const styles = StyleSheet.create({
    error:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    errorText:{
        color: 'red',
        fontFamily: 'pangolin',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
})
