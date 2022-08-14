import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// components
import Water from '../components/Water'
import PlantList from '../components/PlantList'

// styles
import colors from '../styles/colors'

// types
import { PlantType } from '../@types/PlantType'

export default function Home() {
  const [data, setData] = useState<PlantType[]>([])

  useEffect(() => {
    axios.get('http://192.168.0.197:3000/plants').then(res =>
      setData(res.data))
  }, [])
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