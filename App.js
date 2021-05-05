import React from 'react';
import { StyleSheet, View, Alert, Keyboard, Platform } from 'react-native';
import { Title } from './Components/Title';
import { Input } from './Components/Input'
import Main from './Screens/Main';
import TodoScreen from './Screens/TodoScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

async function loadApp() { //async operations before AppInit
  await Font.loadAsync({
    'pangolin': require('./assets/Pangolin-Regular.ttf')
  })
}


export default function App() {
  // --------\ State
  const [isInit, setInit] = React.useState(false);
  const [todos, setTodo] = React.useState([]);
  const [screenId, setscreenId] = React.useState(null);
  //--------------------------------------------------/

  if (!isInit) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setInit(true)}
        onError={console.warn}
      />)
  }

  // --------\ Date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;


  // --------\ On creating new TodoItem
  const PressHandler = (value) => { //if value === null
    if (!value.trim()) {
      Alert.alert(
        "Предупреждение",
        "Добавленый пункт не может быть пустым",
        [{ text: "" }, { text: "OK" }]);
    }
    else { //creating new Item
      let number = todos.length + 1;
      number = number.toString();
      const newElement = { id: Date.now().toString(), number, value, date: today };
      setTodo(prevTodos => [...prevTodos, newElement]);
      Platform.OS==='ios'&&Keyboard.dismiss();
    }
  }


  // ---------\ Delete todo item 
  const deleteItem = (id) => {
    const filteredArr = todos.filter(todo => todo.id !== id); // finds item to del
    filteredArr.forEach((el, i) => el.number = ++i); // changes numerating 
    setTodo([...filteredArr]); // changes state
    setscreenId(null); // exits to Main Screen
  }


  // ---------\ Open todoScreen
  const OpenTodo = (id) => {
    setscreenId(id);
  }

  // ---------\ Save value of Todo item
  const SaveChangedText = (id, currentText) => {
    let newArr = todos.map(todo => {
      if (todo.id === id) {
        todo.value = currentText;
      }
      return todo;
    });
    setTodo([...newArr]);
  }


  // ---------\ Screens control
  let content = <Main //when screenId === null
    todos={todos}
    deleteItem={deleteItem}
    PressHandler={PressHandler}
    OpenTodo={OpenTodo}
  />
  if (screenId) { //when screenId === id
    let todo = todos.find(todo => todo.id === screenId);
    content = <TodoScreen
      SaveChangedText={SaveChangedText}
      setscreenId={setscreenId}
      deleteItem={deleteItem}
      todo={todo}
    />
  }
  //--------------------------------------------------/


  // ---------\ RENDERING 
  return (
    <View style={styles.container}>
      <View>
        <Title />
        <View >
          {content}
        </View>
      </View>
      {!screenId && <Input PressHandler={PressHandler} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1
  },

});

