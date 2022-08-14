import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react'

// components
import { PlantContext } from '../context/PlantContext'

// styles
import colors from '../styles/colors'

// images
import { images } from '../images/images';

// texts
import HeadingText from '../texts/HeadingText'

// types
import { ChoosePlantType } from '../@types/PlantType';

interface Props {
  data: ChoosePlantType
}

export default function ChooseCard({ data }: Props) {
  const { newPlant, setNewPlant } = useContext(PlantContext)

  return (
    <TouchableOpacity
      onPress={() => setNewPlant({ ...newPlant, image: data.image, name: data.name })}
      style={[styles.background, {
        borderColor: newPlant.name === data.name
          ? colors.green
          : colors.shape
      }]}
    >
      <Image style={styles.image} source={images[data.image]} />
      <HeadingText>{data.name}</HeadingText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  background: {
    width: 148,
    height: 154,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    marginRight: 16,
    backgroundColor: colors.shape
  },

  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    marginBottom: 10,
  }
})