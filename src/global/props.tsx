export interface AuthContextType{
    taskList: Array<PropCard>,
    onOpen: void,
    // handleEdit: Function,
    // handleDelete: Function
}

export type PropCard = {
    description: string,
    priority: PropPriority,
    item: number,
    timeLimit: string,
    title: string
}

export type PropPriority = 'Baixa' | 'Media' | 'Alta'