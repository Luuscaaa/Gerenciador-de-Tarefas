import { TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons"
import { themas } from "../../global/themes"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { useContext } from "react"
import { AuthContextList } from "../../context/authContextList"

export const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation, insets }) => {

    const {onOpen} = useContext<any>(AuthContextList)

    const click = (screenName:string) => {
        navigation.navigate(screenName)
    }

    return(
        <View style={styles.tabArea}>
            <TouchableOpacity 
                style={styles.tabItem}
                activeOpacity={0.6}
                onPress={()=> click("Home")}
            >
                <MaterialIcons
                    name="format-list-bulleted"
                    size={35}
                    style={{opacity: state.index === 0? 1:0.3, color: themas.color.primary}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.tabCentralItem}
                activeOpacity={0.6}
                onPress={() => onOpen()}
            >
                <View 
                    style={{
                        width: '100%',
                        left: 10,
                        top: 6
                    }}
                >
                    <Entypo
                        name="plus"
                        size={40}
                        color={themas.color.secondary}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row-reverse',
                        width: '100%',
                        right: 10,
                        bottom: 8
                    }}
                >
                    <MaterialIcons
                        name="edit"
                        size={30}
                        color={themas.color.secondary}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.tabItem}
                activeOpacity={0.6}
                onPress={()=> click("User")}   
            >
                <Feather
                    name="user"
                    size={35}
                    style={{opacity: state.index === 1? 1:0.3, color: themas.color.primary}}
                />
            </TouchableOpacity>
        </View>
    )
}