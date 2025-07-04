import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Alert, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { themas } from "../global/themes";
import { Input } from "../components/input";
import { Flag } from "../components/flag";
import CustomDateTimePicker from "../components/customDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContextList:any = createContext({})

const priorities = [
    {
        priority: 'Baixa',
        color: themas.color.blue
    },
    {
        priority: 'Média',
        color: themas.color.orange
    },
    {
        priority: 'Alta',
        color: themas.color.red
    },
]

export const AuthProviderList = (props:any) : any => {

    const modalizeRef = useRef<Modalize>(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedPriority, setSelectedPriority] = useState('Alta')
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedTime, setSelectedTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false)
    const [item, setItem] = useState(0)
    const [taskList, setTaskList] = useState([])

    const onOpen = () => {
        modalizeRef.current?.open()
    }

    const onClose = () => {
        modalizeRef.current?.close()
    }

    // useEffect(() => {
    //     onOpen()
    // }, [])

    const renderPriorities = () => {
        return(
            priorities.map((item, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={() => {
                        setSelectedPriority(item.priority)
                    }}    
                >
                    <Flag
                        priority={item.priority}
                        color={item.color}
                        selected={item.priority === selectedPriority}
                    />
                </TouchableOpacity>
            ))
        )
    }

    const handleDateChange = (date:Date) => {
        setSelectedDate(date)
    }

    const handleTimeChange = (date:Date) => {
        setSelectedTime(date)
    }

        const handleSave = async () => {
            if( !title || !description || !selectedPriority){
                return Alert.alert('Atenção!', '\nPreencha todos os campos.')
            }
            try {
                const newItem = {
                    item: Date.now(),
                    title,
                    description,
                    flags: selectedPriority,
                    timeLimit: new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        selectedDate.getDay(),
                        selectedTime.getHours(),
                        selectedTime.getMinutes(),
                    ).toISOString()
                }

                const storageData = await AsyncStorage.getItem('taskList')

                console.log(storageData)
                
                let taskList = storageData ? JSON.parse(storageData):[]

                taskList.push(newItem)

                await AsyncStorage.setItem('taskList', JSON.stringify(taskList))

                setTaskList(taskList)
                setData()
                onClose()

            } catch (error) {
                console.log("Erro ao salvar o item.", error)
            }
        }

    const setData = () => {
        setTitle('')
        setDescription('')
        setSelectedPriority('Baixa')
        setItem(0)
        setSelectedDate(new Date())
        setSelectedTime(new Date())
    }

    const container = () => {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => onClose()}>
                        <FontAwesome
                            name="close"
                            size={30}
                            color={themas.color.gray}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}> Criar Tarefas </Text>
                    <TouchableOpacity onPress={() => handleSave()}>
                        <FontAwesome
                            name="check"
                            size={30}
                            color={themas.color.gray}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Input
                        title="Titulo:"
                        labelStyle={styles.label}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Input
                        title="Descrição:"
                        labelStyle={styles.label}
                        height={100}
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    />
                    <View style={styles.boxDateLimit}>
                        <View style={styles.dateLimit}>
                            <Input
                                title="Data Limite"
                                labelStyle={styles.label}
                                editable={false}
                                value={new Intl.DateTimeFormat('pt-BR').format(selectedDate)}
                                onPress={() => setShowDatePicker(true)}
                            />
                        </View>
                        <View style={styles.dateLimit}>
                            <Input
                                title="Hora Limite"
                                labelStyle={styles.label}
                                editable={false}
                                value={selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                onPress={() => setShowTimePicker(true)}
                            />
                        </View>
                    </View>
                    <CustomDateTimePicker
                        onDateChange={handleDateChange}
                        setShow={setShowDatePicker}
                        show={showDatePicker}
                        type={'date'}
                    />
                    <CustomDateTimePicker
                        onDateChange={handleTimeChange}
                        setShow={setShowTimePicker}
                        show={showTimePicker}
                        type={'time'}
                    />
                    <View style={styles.contentFlag}>
                        <Text style={styles.label}> Prioridade: </Text>
                        <View style={styles.priorities}>
                            {renderPriorities()}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <AuthContextList.Provider value={{onOpen, taskList}}>
            {props.children}
            <Modalize 
                ref={modalizeRef}
                modalHeight={Dimensions.get('window').height/1.3}
            >
                {container()}
            </Modalize>
        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList)