import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppButton from '../UI/AppButton'
import ModalEdit from './ModalEdit'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

const TodoScreen = () => {

    const { updateTodo, removeTodo, todos, error } = React.useContext(TodoContext);
    const { changeScreen, screenId } = React.useContext(ScreenContext);
    const [modal, setModal] = React.useState(false);

    const todo = todos.find(t => t.id === screenId);

    const SaveTextHandler = async (value) => {
        await updateTodo(todo.id, value);
        setModal(false);
    }
    const DeleteTodo = () => {
        removeTodo(todo.id);
        changeScreen(null);
    }


    return <View style={styles.container}>

        <ModalEdit
            error={error}
            visible={modal}
            setModal={setModal}
            value={todo.value}
            SaveTextHandler={SaveTextHandler}
        />

        <View style={styles.text}>
            <Text style={{ fontFamily: 'pangolin' }}>{todo.value}</Text>
            <Text style={styles.date}>Создано: {todo.date}</Text>
        </View>

        <View style={styles.buttons}>
            <View style={styles.button}>
                <AppButton onPress={() => changeScreen(null)}
                    back_color='blue' text_color='white'>
                    <AntDesign name='back' size={25} />
                </AppButton>
            </View>
            <View style={styles.button}>
                <AppButton onPress={() => setModal(true)}
                    back_color='green' text_color='white'>
                    <AntDesign name='edit' size={25} />
                </AppButton>
            </View>
            <View style={styles.button}>
                <AppButton onPress={DeleteTodo}
                    back_color='red' text_color='white'>
                    <AntDesign name='delete' size={25} />
                </AppButton>
            </View>
        </View>

    </View>
}

export default TodoScreen

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        padding: 10,
    },
    text: {
        padding: 10,
        marginBottom: 10,
        borderColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: 'yellow',
        borderRadius: 5,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,

    },
    date: {
        marginTop: 40,
        textAlign: 'right',
        fontStyle: 'italic',
    }
})