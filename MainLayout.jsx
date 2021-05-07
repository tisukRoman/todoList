import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title } from './Components/Title'
import { Input } from './Components/Input'
import Main from './Screens/Main'
import TodoScreen from './Screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'


const MainLayout = () => {

    const { screenId } = React.useContext(ScreenContext);

    // ---------\ RENDERING 
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Title />
                <View style={{flex: 1}}>
                    {screenId ? <TodoScreen /> : <Main />}
                </View>
            </View>
            {!screenId && <Input />}
        </View>
    );
}
export default MainLayout


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1
    },
});