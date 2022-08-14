import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'

// components
import PlaceCard from './PlaceCard'
import { PlantContext } from '../context/PlantContext'

// styles
import colors from '../styles/colors'

// texts
import HeadingText from '../texts/HeadingText'
import MainText from '../texts/MainText'

export default function Place() {
    const {newPlant, setNewPlant} = useContext(PlantContext)
    return (
        <View>
            <View style={styles.textBackground}>
                <HeadingText textStyles={styles.title1}>Em qual ambiente</HeadingText>
                <MainText textStyles={styles.title2}>você quer colorar sua planta?</MainText>
            </View>
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 30 }}
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <PlaceCard onPress={() => setNewPlant({...newPlant, place: 'Sala'})} selected={newPlant} place='Sala' />
                <PlaceCard onPress={() => setNewPlant({...newPlant, place: 'Quarto'})} selected={newPlant} place='Quarto' />
                <PlaceCard onPress={() => setNewPlant({...newPlant, place: 'Cozinha'})} selected={newPlant} place='Cozinha' />
                <PlaceCard onPress={() => setNewPlant({...newPlant, place: 'Banheiro'})} selected={newPlant} place='Banheiro' />
                <PlaceCard onPress={() => setNewPlant({...newPlant, place: 'Sacada'})} selected={newPlant} place='Sacada' />
                <PlaceCard onPress={() => setNewPlant({...newPlant, place: 'Jardim'})} selected={newPlant} place='Jardim' />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textBackground: {
        paddingHorizontal: 30,
        marginBottom: 24,
    },

    title1: {
        fontSize: 17
    },

    title2: {
        fontSize: 17, color: colors.heading
    }
})