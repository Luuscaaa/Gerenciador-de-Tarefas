import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const styles = StyleSheet.create({
    tabArea:{
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        marginBottom: 15,
        borderTopWidth: 0.5,
        borderColor: themas.color.lightGray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    tabItem:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabCentralItem:{
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        top: -30,
        backgroundColor: themas.color.primary
    }
})