import { StyleSheet, TextInput, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'

// components
import { PlantContext } from '../context/PlantContext'

// style
import colors from '../styles/colors'

// texts
import MainText from '../texts/MainText';

export default function Time() {
    const { newPlant, setNewPlant } = useContext(PlantContext)

    const [horas, setHoras] = useState<string>(null)
    const [min, setMin] = useState<string>(null)
    const [seg, setSeg] = useState<string>(null)

    useEffect(() => {
        if (newPlant.time === '') {
            setHoras(null)
            setMin(null)
            setSeg(null)
        }
    }, [newPlant])

    useEffect(() => {
        if ((horas && min && seg)) {
            setNewPlant({ ...newPlant, time: `${horas}:${min}:${seg}` })
        }
    }, [horas, min, seg])

    return (
        <View style={styles.background}>
            <MainText textStyles={styles.textHeader}>Escolha o melhor horário para ser lembrado:</MainText>
            <View style={styles.timeBackground}>
                <View style={styles.inputBackground}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={2}

                        value={horas}
                        onChangeText={setHoras}
                    />
                    <MainText textStyles={styles.textTime}>horas</MainText>
                </View>
                <View style={styles.inputBackground}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={2}
                        value={min}
                        onChangeText={setMin}
                    />
                    <MainText textStyles={styles.textTime}>min</MainText>
                </View>
                <View style={styles.inputBackground}>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={2}
                        value={seg}
                        onChangeText={setSeg}
                    />
                    <MainText textStyles={styles.textTime}>seg</MainText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },

    textHeader: {
        color: colors.heading,
        marginBottom: 20
    },

    timeBackground: {
        width: 259,
        height: 32,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        backgroundColor: colors.shape
    },

    inputBackground: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    input: {
        width: 23,
        marginRight: 5,
        borderWidth: 1,
        paddingLeft: 3,
        fontSize: 17,
        color: colors.heading,
        borderColor: colors.gray,
        borderRadius: 5,
        backgroundColor: colors.shape,
    },

    textTime: {
        fontSize: 17,
        color: colors.heading
    }
})