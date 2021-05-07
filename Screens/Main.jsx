import React from 'react'
import { FlatList, View, StyleSheet, Image, Text, Alert } from 'react-native'
import { TodoItem } from '../Components/TodoItem'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import Loader from '../Components/Loader'
import Error from '../Components/Error'
import Empty from '../Components/Empty'

const Main = () => {
    const { todos, fetchTodos, isFetching, error } = React.useContext(TodoContext);
    const { changeScreen } = React.useContext(ScreenContext);

    const getTodosData = React.useCallback(async () => await fetchTodos(), [fetchTodos])

    React.useEffect(() => {
        getTodosData();
    }, [])


    //-----------------\ RENDERING
    if (isFetching) {
        return <Loader/>
    }
    if(error){
        return <Error error={error} func={fetchTodos}/>
    }
    if(!todos.length){
        return <Empty/>
    }
    let content = (
        <FlatList
            data={todos}
            renderItem={({ item }) =>
            (<View>
                <TodoItem id={item.id}
                    value={item.value}
                    number={item.number}
                    OpenTodo={(id) => { changeScreen(id) }} />
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