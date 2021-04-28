import React from 'react';
import { StyleSheet, View, FlatList , Alert} from 'react-native';
import { Input } from './Components/Input';
import { Title } from './Components/Title';
import { TodoItem } from './Components/TodoItem';

export default function App() {

  const [todos, setTodo] = React.useState([]) /// state with todos

  React.useEffect(()=>{
    Alert.alert(
      "First React Native app",
      "Made by Tyshuk Roman for my portfolio",
      [ {text: ""}, { text: "OK"}] );
  },[])


  const PressHandler = (value) => { ///////// on pressing button
    if(!value){
      Alert.alert(
        "Предупреждение",
        "Добавленый пункт не может быть пустым",
        [ {text: ""}, { text: "OK"}] );
    }else{
      let number = todos.length + 1;
      number = number.toString();
      setTodo(prevTodos => [...prevTodos, { id: Date.now().toString(), number, value }]);
    }
  
  }//////////////////////////////////////////////////////////


  const deleteItem = (id) => { ////// deleting todo item 
    const filteredArr = todos.filter( el => { // finds item to delete
      if(el.id===id)return false;
      else return true;
    });
    filteredArr.forEach( (el, i) => el.number = ++i ); // changes numerating 
    setTodo([...filteredArr]);
  }///////////////////////////////////////////////////////////


  return (
    <View style={styles.container}>
      <Title />
      <Input PressHandler={PressHandler} />
      <View style={styles.body}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (<TodoItem id={item.id} value={item.value} number={item.number} deleteItem={deleteItem} />)}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  body: {
    flex: 1,
    padding: 20
  }
});
