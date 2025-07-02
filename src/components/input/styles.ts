import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const styles = StyleSheet.create({
    boxInput:{
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: themas.color.bgInput,
        borderColor: themas.color.lightGray,
        paddingHorizontal: 10
    },
    input:{
        height: '100%',
        width: '90%',
        paddingHorizontal: 10,
    },
    titleInput:{
        marginLeft: 5,
        color: themas.color.gray,
        marginTop: 20,
        fontSize: 16
    },
    icon:{
        
    }
})