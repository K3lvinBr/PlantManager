import { View } from 'react-native';
import React, { useState } from 'react'
import axios from 'axios'

// components
import Place from '../components/Place'
import ChoosePlant from '../components/ChoosePlant'
import Time from '../components/Time'
import Button from '../components/Button'

// context
import { PlantContext, DefaultNewPlant } from '../context/PlantContext';

// styles
import colors from '../styles/colors'

export default function New({ navigation }) {
  const [newPlant, setNewPlant] = useState(DefaultNewPlant.newPlant)

  const handleCreatePlant = () => {
    if (newPlant.place && newPlant.name && newPlant.image != null && newPlant.time) {
      axios.post('http://192.168.0.197:3000/register', {
        place: newPlant.place,
        name: newPlant.name,
        image: newPlant.image,
        time: newPlant.time,
      }).then(() => {
        setNewPlant({
          id: null,
          place: '',
          name: '',
          image: null,
          time: ''
        })
        navigation.navigate('home')
      })
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <PlantContext.Provider value={{ newPlant, setNewPlant }}>
        <Place />
        <ChoosePlant />
        <Time />
        <View style={{ paddingHorizontal: 30 }}>
          <Button onPress={() => { handleCreatePlant() }} styleButton={{ height: 56 }} textButton='Cadastrar planta' />
        </View>
      </PlantContext.Provider>
    </View >
  )
}