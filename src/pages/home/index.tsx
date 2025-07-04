import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react";
import { Marker } from "../../components/marker";
import { Flag } from "../../components/flag";

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

type PropCard = {
    item:number, 
    title:string, 
    description:string, 
    priority:'Baixa' | 'Media' | 'Alta'
}

const data:Array<PropCard> =
[
    {
        item: 0,
        title: 'Realizar lição de casa',
        description: 'Exercicios 9 e 10 da apostila de English',
        priority: 'Baixa'
    },
    {
        item: 1,
        title: 'Fazer compras',
        description: 'Lista de compras: 1 - Açucar, 2 - Leite',
        priority: 'Baixa'
    }
]

export default function Home () {

    const [greeting, setGreeting] = useState(getGreeting())
    const user = 'Lucas Santana'

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting())
        }, 60000)
        return () => clearInterval(interval)
    })

    const renderCard = (item:PropCard) => {
        return(
            <TouchableOpacity style={styles.card}>
                <View style={styles.rowCard}>
                    <View style={styles.rowCardLeft}>
                        <Marker color="red"/>
                        <View>
                            <Text style={styles.titleCard} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.descriptionCard} numberOfLines={1}>{item.description}</Text>
                        </View>
                    </View>
                    <Flag
                        priority="Urgente"
                        color="red"
                    />
                </View>
            </TouchableOpacity>
        )
    }

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
            <View style={styles.boxListTask}>
                <FlatList
                    data={data}
                    style={styles.flatList}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({item, index}) => {return(renderCard(item))}}
                />
            </View>
        </View>
    )
} 