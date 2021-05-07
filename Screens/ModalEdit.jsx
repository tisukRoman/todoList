import React from 'react'
import { Modal, TextInput, View, StyleSheet } from 'react-native'
import AppButton from '../UI/AppButton'
import {AntDesign} from '@expo/vector-icons'
import Error from '../Components/Error'


const ModalEdit = ({ visible, setModal, value, SaveTextHandler, error }) => {

    const [currentText, setCurrentText] = React.useState(value);

    
    if(error){
        <Error error={error} func={SaveTextHandler}/>
    }
    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
        >
            <View style={styles.modal}>
                <TextInput style={styles.input} value={currentText} onChangeText={setCurrentText} />

                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <AppButton onPress={() => setModal(false)} back_color='blue' text_color='white'>
                            <AntDesign name='back' size={25} />
                        </AppButton>
                    </View>
                    <View style={styles.button}>
                        <AppButton onPress={()=>SaveTextHandler(currentText)} back_color='green' text_color='white'>
                        <AntDesign name='save' size={25} />
                        </AppButton>
                    </View>
                </View>

            </View>
        </Modal>
    )
}
export default ModalEdit

const styles = StyleSheet.create({
    modal: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 30
    },
    buttons: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-evenly',
    },
    button: {
        flex: 1,
        marginHorizontal: 20
    },
    input: {
        height: 50,
        marginBottom: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '100%',
        padding: 5
    }
})