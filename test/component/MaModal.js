import { Modal, Text, View, Button, StyleSheet } from "react-native";



const MaModal = ({bool, callBack}) => {
    return ( 
        <Modal visible={bool}>
            <View>
                <Text style={styles.text}>Hello Modale</Text>
                <Text> in View (created by FirstDemo)
    in RCTView (created by View)
    in View (created by FirstDemo)
    in FirstDemo (created by App)
    in App
    in RCTView (created by View)
    in View (created by AppContainer)
    in RCTView (created by View)</Text>
                <Button title="Fermer modal" onPress={callBack} />
            </View>
        </Modal>


     );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 30
    }
})
 
export default MaModal;