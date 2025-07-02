import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, TurboModuleRegistry, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { useState } from "react";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from "@react-navigation/native"


export default function Login () {

    const navigation = useNavigation<NavigationProp<any>>()

    const[email, setEmail] = useState('a')
    const[password, setPassword] = useState('1')
    const[loading, setLoading] = useState(false)
    const[showPassword, setShowPassword] = useState(true)

    async function getLogin () {

        setLoading(true)

        try {

            if (!email || !password){
                return Alert.alert('Atenção', '\nInforme os campos obrigatórios!')
            }


            setTimeout(()=>{
            
                navigation.reset({routes:[{name:"BottomRoutes"}]})

            }, 2000)

        } 
        catch (error) {

            console.log(error)

        } 
        finally{

            setLoading(true)

            setTimeout(()=>{
            
                setLoading(false)

            }, 2000)

        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <MaterialIcons
                    name="checklist"
                    size={120}
                    color="#878AF6"
                />
                <Text style={styles.title}>Bem-vindo de volta!</Text>
            </View>
            <View style={styles.boxMid}>
                <Input
                    title="E-mail"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite o seu e-mail"
                />
                <Input
                    title="Senha"
                    IconRight={Octicons}
                    iconRightName={showPassword?"eye-closed":"eye"}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite a sua senha"
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={styles.boxBottom}>
                <Button
                    text="Entrar"
                    loading={loading}
                    onPress={getLogin}
                />
                <TouchableOpacity style={styles.boxBaseboard}>
                    <Text style={styles.textBaseboard}>
                        Não tem conta?
                        <Text style={{ color: themas.color.primary }}> 
                            Clique aqui!
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}