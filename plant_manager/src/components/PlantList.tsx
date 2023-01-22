import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'

// components
import PlantCard from './PlantCard';

// texts
import MainText from '../texts/MainText';
import HeadingText from '../texts/HeadingText';

// styles
import colors from '../styles/colors';

// types
import { PlantType } from '../@types/PlantType'

interface Props {
    data: PlantType[]
}

export default function PlantList({ data }: Props) {
    return (
        <View style={styles.listBackground}>
            <HeadingText textStyles={styles.listHeading}>Próximas regadas</HeadingText>
            <FlatList
                data={data}
                renderItem={({ item }) => <PlantCard data={item} />}
                keyExtractor={({ id }) => id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 300 }}
                ListEmptyComponent={() => (
                    <View>
                        <MainText textStyles={styles.emptyListText}>
                            Você ainda não possui{'\n'}
                            plantas adicionadas
                        </MainText>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listBackground: {
        marginTop: 40,
    },

    listHeading: {
        fontSize: 24,
        marginBottom: 16,
    },

    emptyListText: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 100,
        color: colors.gray
    }
})