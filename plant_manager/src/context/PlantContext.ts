import { createContext } from 'react'

// types
import { PlantType } from '../@types/PlantType';

interface PropsContext {
  newPlant: PlantType
  setNewPlant: React.Dispatch<React.SetStateAction<PlantType>>
}

export const DefaultNewPlant = {
  newPlant: {
    id: null,
    place: '',
    name: '',
    image: null,
    time: ''
  },
  setNewPlant: () => { }
}

export const PlantContext = createContext<PropsContext>(DefaultNewPlant)