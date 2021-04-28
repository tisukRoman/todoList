import React from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

export const Input = ({ PressHandler }) => {

    const [value, setValue] = React.useState(''); // input text

    const onSubmit = () => {
        PressHandler(value);
        setValue('');
    }

    return (
        <View style={styles.input}>

            <TextInput
                value={value}
                onChangeText={value => setValue(value)}
                style={styles.inputField}
                placeholder='название дела...'
            ></TextInput>

            <Button
                title='добавить'
                style={styles.button}
                onPress={onSubmit}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        padding: 10,
        marginTop:10
    },
    inputField: {
        flex: 1,
        padding: 5,
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    }
})