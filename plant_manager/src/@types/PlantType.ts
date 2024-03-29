export interface PlantType {
    id: string
    place: string
    name: string
    image: number
    time: string
}

export interface DataProps {
    data: PlantType
}

export interface ChoosePlantType {
    image: number
    name: string
}