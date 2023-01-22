import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

// components
import Water from '../components/Water'
import PlantList from '../components/PlantList'

// styles
import colors from '../styles/colors'

// types
import { PlantType } from '../@types/PlantType'

export default function Home() {
  const isFocused = useIsFocused();
  const [data, setData] = useState<Array<PlantType>>([])

  useEffect(() => {
    isFocused && getData()
  }, [isFocused])

  const getData = async () => {
    try {
      const jsonValue  = await AsyncStorage.getItem('@storage_Key')
      if(jsonValue !== null) {
        setData(JSON.parse(jsonValue))
      }
    } catch(e) {
      console.log('error ao ler dados')
    }
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 30
    }}>
      <Water data={data[0]} />
      <PlantList data={data} />
    </View>
  )
}