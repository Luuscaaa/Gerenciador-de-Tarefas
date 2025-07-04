import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { themas } from "../../global/themes"


type Props = {
    color: string
}

export function Marker ({...rest}:Props) {
    return(
        <View style={[styles.marker, {borderColor:rest.color || themas.color.gray}]}></View>
    )
}