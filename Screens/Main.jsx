import React from 'react'
import { FlatList, View, StyleSheet, Image } from 'react-native'
import { TodoItem } from '../Components/TodoItem'

const Main = ({ todos, OpenTodo }) => {

    let content = (
        <FlatList
            data={todos}
            renderItem={({ item }) =>
            (<View>
                <TodoItem id={item.id}
                    value={item.value}
                    number={item.number}
                    OpenTodo={OpenTodo} />
            </View>)}
            keyExtractor={(item) => item.id} />)



    if (todos.length === 0) {
        content = (
            <View style={styles.picture} >
                <Image source={require('../assets/no-items.png')} />
            </View>
        )
    }

    return (
        <View style={styles.main}>
            {content}
        </View>
    )
}
export default Main



const styles = StyleSheet.create({
    main: {
        padding: 20,
    },
    picture: {
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ scale: 0.6 }],
    },

})