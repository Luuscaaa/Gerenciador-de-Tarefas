import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        padding: 20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',

    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    content:{
        width: '100%',
    },
    label:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
        marginTop: 20
    },
    contentFlag:{
        width: '100%',
    },
    priorities:{
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    boxDateLimit:{
        width: '100%',
        flexDirection:'row',
        gap: 10,
        justifyContent: 'center'
    },
    dateLimit:{
        width: '40%',
        gap: 10,
    }
})