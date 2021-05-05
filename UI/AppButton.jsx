import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native'

const AppButton = ({ children, onPress, back_color='yellow', text_color='black' }) => {

    let Wrapper = (Platform.OS === 'android') ?  TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={ {...styles.button, backgroundColor: back_color} }>
                <Text style={{fontFamily:'pangolin',  lineHeight: 40, color: text_color}}>{ children }</Text>
            </View>
        </Wrapper>
    )
}
export default AppButton

const styles = StyleSheet.create({
    button:{
        height:40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})