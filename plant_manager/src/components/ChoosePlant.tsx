import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react'

// components
import Search from './Search'
import ChooseCard from './ChooseCard';

// styles
import colors from '../styles/colors'

// texts
import HeadingText from '../texts/HeadingText'
import MainText from '../texts/MainText'

// types
import { ChoosePlantType } from '../@types/PlantType';

export default function ChoosePlant() {
    const [data, setData] = useState<ChoosePlantType[]>([
        {
            image: 0,
            name: 'Peperomia'
        },
        {
            image: 1,
            name: 'Aningapara'
        },
        {
            image: 2,
            name: 'Yucca'
        },
        {
            image: 3,
            name: 'Imbé'
        },
        {
            image: 4,
            name: 'Espada são jorge'
        },
        {
            image: 5,
            name: 'Zamioculca'
        },
    ])
    return (
        <View>
            <View style={styles.textBackground}>
                <View>
                    <HeadingText textStyles={styles.title1}>Escolha qual</HeadingText>
                    <MainText textStyles={styles.title2}>planta adicionar?</MainText>
                </View>
                <Search />
            </View>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <ChooseCard data={item} />}
                keyExtractor={({ image }) => image.toString()}
                contentContainerStyle={{ paddingLeft: 30, paddingRight: 14 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textBackground: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginBottom: 15,
        marginTop: 40,
    },

    title1: {
        fontSize: 17
    },

    title2: {
        fontSize: 17,
        color: colors.heading
    }
})