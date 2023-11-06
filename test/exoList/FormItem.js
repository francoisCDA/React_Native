import { useState } from "react";
import { Button, Modal, TextInput, View, Text } from "react-native";


const FormItem = ({visible, ajouter , fermer}) => {

    const [item,setItem] = useState('')

    const addItem = () => {
        ajouter(item);
        setItem('');
        fermer();
    }

    return ( 
        <Modal visible={visible}>
            <View>
                <Text >Ajouter un élément :</Text>
                <TextInput onChangeText={(txt) => {setItem(txt)}} value={item} />

                <View>
                    <Button title="Ajouter" onPress={addItem} />
                    <Button title="Annuler" onPress={fermer} />
                </View>
            </View>
        </Modal>
     );
}
 
export default FormItem;