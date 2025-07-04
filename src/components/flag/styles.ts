import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container:{
        width: 80,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.color.red,
        borderRadius: 10
    },
    text:{
        color: themas.color.secondary
    }
})