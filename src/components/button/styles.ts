import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const styles = StyleSheet.create({
        button:{
            width: 250,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themas.color.primary,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
    
            elevation: 12,
        },
        textButton:{
        color: themas.color.secondary,
        fontWeight: 'bold',
        fontSize: 16
    },
})