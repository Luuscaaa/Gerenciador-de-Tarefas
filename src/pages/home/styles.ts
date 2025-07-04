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
        marginLeft: 5
    },
    name:{
        fontWeight:'bold',
        fontSize: 18
    },
    boxListTask:{
        flex: 1,
        backgroundColor: themas.color.lightGray,
        width: '100%'
    },
    flatList:{
        marginTop: 20,
        paddingHorizontal: 20
    },
    card:{
        width: '100%',
        height: 60,
        backgroundColor: themas.color.secondary,
        borderWidth: 1,
        borderColor: themas.color.gray,
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        justifyContent: 'center',
    },
    rowCard:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowCardLeft:{
        width: '70%',
        height: '100%',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 10
    },
    titleCard:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    descriptionCard:{
        color: themas.color.gray
    },  
})