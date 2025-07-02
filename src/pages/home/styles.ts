import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    header:{
        width: '100%',
        height: Dimensions.get('window').height/4,
        backgroundColor: themas.color.primary,
        paddingTop: 50,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    greeting:{
        fontSize: 18,
        color: themas.color.secondary,
        marginBottom: 10,
        marginLeft: 3
    },
    name:{
        fontWeight:'bold'
    }
})