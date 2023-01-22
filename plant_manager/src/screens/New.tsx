import { ScrollView, View } from 'react-native';
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handleCreatePlant = async () => {
    if (newPlant.place && newPlant.name && newPlant.image != null && newPlant.time) {
      try {
        const jsonValue = {
          id: Math.random().toString(16).slice(2),
          place: newPlant.place,
          name: newPlant.name,
          image: newPlant.image,
          time: newPlant.time,
        }
        const dataItems = JSON.parse(await AsyncStorage.getItem('@storage_Key'))
        if(dataItems === null) {
          await AsyncStorage.setItem('@storage_Key', JSON.stringify([jsonValue]))
        } else {
          await AsyncStorage.setItem('@storage_Key', JSON.stringify([...dataItems, jsonValue]))
        }
        setNewPlant({
          id: null,
          place: '',
          name: '',
          image: null,
          time: ''
        })
        navigation.goBack()
      } catch (e) {
        console.log('error ao armazenar dados')
      }
    }
  }

  return (
    <PlantContext.Provider value={{ newPlant, setNewPlant }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <Place />
        <ChoosePlant />
        <Time />
        <View style={{ paddingHorizontal: 30 }}>
          <Button onPress={() => { handleCreatePlant() }} styleButton={{ height: 56 }} textButton='Cadastrar planta' />
        </View>
      </ScrollView >
    </PlantContext.Provider>
  )
}