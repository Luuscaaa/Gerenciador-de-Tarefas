import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { themas } from "../../global/themes"


type Props = {
    priority: string
    color: string
    selected?: boolean
}

export function Flag ({...rest}:Props) {
    return(
        <View 
            style={[
                styles.container, 
                {backgroundColor:rest?.color},
                rest?.selected && {borderWidth: 2}
            ]}
        >
            <Text style={styles.text}>{rest.priority}</Text>
        </View>
    )
}