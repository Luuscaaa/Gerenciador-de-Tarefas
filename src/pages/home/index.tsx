import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react";

const getGreeting = () => {

    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12){
        return 'Bom dia'
    }
    else if (hour >= 12 && hour < 18){
        return 'Boa tarde'
    }
    else {
        return 'Boa noite'
    }
}

export default function Home () {

    const [greeting, setGreeting] = useState(getGreeting())
    const user = 'Lucas Santana'

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting())
        }, 60000)
        return () => clearInterval(interval)
    })

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>
                    {`${greeting},`}
                    <Text style={styles.name}> {`${user}!`} </Text>
                </Text>
            <Input
                IconLeft={MaterialIcons}
                iconLeftName="search"
                placeholder="Pesquise uma tarefa"
            />
            </View>
        </View>
    )
}