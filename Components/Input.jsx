import React from 'react'
import { TextInput, KeyboardAvoidingView, StyleSheet, Alert} from 'react-native'
import AppButton from '../UI/AppButton';
import {Entypo} from '@expo/vector-icons'
import { TodoContext } from '../context/todo/todoContext';

export const Input = () => {

    const {addTodo, isFetching, error} = React.useContext(TodoContext); 
    const [value, setValue] = React.useState(''); // input text

    const onSubmit = () => {
        if(value.trim()===''){
            Alert.alert('Внимание', 'Текст не может быть пустым');
            return;
        }
        addTodo(value);
        setValue('');
    }


    //---------------\ RENDERING
    if(isFetching||error){
        return null;
    }
    return (
        <KeyboardAvoidingView style={styles.input}>

            <TextInput
                value={value}
                onChangeText={value => setValue(value)}
                style={styles.inputField}
                placeholder='название дела...'
            ></TextInput>

            <AppButton onPress={onSubmit} >
                <Entypo name='add-to-list' size={25}/>
            </AppButton>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 30,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white'
    },
    inputField: {
        flex: 1,
        padding: 5,
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginHorizontal: 10,
    }
})