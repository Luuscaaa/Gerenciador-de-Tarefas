import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 40,
        justifyContent: 'center',
        // backgroundColor: 'red',
        paddingBottom: 20
    },
    boxBottom:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'blue',
        paddingTop: 30
    },
    title:{
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 30
    },
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
    boxBaseboard:{
        position: 'absolute',
        bottom: 20
    },
    textBaseboard:{
        fontSize: 16,
        color: themas.color.gray
    },
})