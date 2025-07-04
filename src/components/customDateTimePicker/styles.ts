import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const styles = StyleSheet.create({
    modalOverlay:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themas.color.transparent
    },
    container:{
        width: '90%',
        backgroundColor: themas.color.secondary,
        elevation: 5,
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
    }
})