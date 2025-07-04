interface AuthContextType{
    taskList: Array<PropCard>,
    onOpen: void,
    handleEdit: Function,
    handleDelete: Function
}

type PropCard = {
    description: string,
    priority: PropPriority,
    item: number,
    timeLimit: string,
    title: string
}

type PropPriority = 'Baixa' | 'Media' | 'Alta'