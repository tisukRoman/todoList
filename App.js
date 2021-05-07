import React from 'react';
import MainLayout from './MainLayout';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import TodoState from './context/todo/todoState';
import ScreenState from './context/screen/screenState';


// ---------\ ASYNC OPERATIONS BEFORE INIT
async function loadApp() {
  await Font.loadAsync({ // font settings
    'pangolin': require('./assets/Pangolin-Regular.ttf')
  })
}


export default function App() {

  // ---------\ STATE OF INIT
  const [isInit, setInit] = React.useState(false);

  // ---------\ INITIALIZING
  if (!isInit) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setInit(true)}
        onError={console.warn}
      />)
  }

  // ---------\ RENDERING 
  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}



