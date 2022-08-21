import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

// screens
import Home from '../screens/Home';
import New from '../screens/New';

// components
import { HeaderText, HeaderPicture } from '../components/Header';

// styles
import colors from '../styles/colors';

// assets
import photo from '../assets/photo.png'

// types
import { RootParamList } from '../@types/RoutesType';

const { Navigator, Screen } = createBottomTabNavigator<RootParamList>()

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 80,
                        bottom: 10,
                        left: 20,
                        right: 20,
                        borderRadius: 15,
                        position: 'absolute',
                    },
                    headerStyle: {
                        height: 192,
                        backgroundColor: colors.background,
                        borderBottomWidth: 0,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerRightContainerStyle: {
                        paddingRight: 30
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 15
                    },
                }}
            >
                <Screen name='home' component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name='bars'
                            size={focused ? 35 : 30}
                            color={focused ? colors.green : colors.gray}
                        />
                    ),
                    headerTitle: () => (
                        <HeaderText
                            mainText='Minhas'
                            subText='Plantinhas'
                        />
                    ),
                    headerRight: () => (
                        <HeaderPicture
                            source={photo}
                        />
                    )
                }}
                />
                <Screen name='new' component={New} options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name='pluscircleo'
                            size={focused ? 35 : 30}
                            color={focused ? colors.green : colors.gray}
                        />
                    ),
                    headerTitle: () => (
                        <HeaderText
                            mainText='Adicionar'
                            subText='Nova planta'
                        />
                    ),
                    headerRight: () => (
                        <HeaderPicture
                            source={photo}
                        />
                    )
                }}
                />
            </Navigator>
        </NavigationContainer >
    )
}